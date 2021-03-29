## Ошибки

#### Webpack

Отключил *perfomance hints* и выставил *mode: production*
#### Ошибка 1

[tsl] ERROR in D:\code\shri-2021-task-3\src\application\data.ts(46,14)
TS2678: Type '"update"' is not comparable to type '"message" | "next" | "prer"'.

Решение:
*actions.ts* - добавить к *type Action* объединение с ReturnType<typeof actionUpdate> 

#### Ошибка 2

Uncaught TypeError: Cannot read property 'dataset' of null at HTMLBodyElement.<anonymous> (frame.ts:25)

Выводится при клике на название слайда (this is a test)

Решение: 
*frame.ts* - восстановить пропавшую условную конструкцию *if (target && target.dataset)*

#### Ошибка 3

*index.ts* подсветка неиспользуемого импорта помогла заметить, что в слушателе селектора *.next* диспатчится не то действие

Решение:
*index.ts* -> () => dispatch(actionNext())

#### Ошибка 4

*index.css* - не указаны единицы в селекторе *.slide-progress-value*

Решение:
*index.css* -> .slide-progress-value { height: 4px; }

#### Ошибка 5

Чанки прогресс-бара изначально заполнены на 100%

Решение:
*index.css -> добавить к .slide-progress-value { transform: scale(0); }

#### Ошибка 6

На этом этапе осознал, что без вникания в RxJS тут не справиться, так что просмотрел пару краш-курсов, почитал документацию и благодаря репозиторию *awesome-rxjs* узнал о паре ресурсов с интерактивной документацией по *observables* и марблами...
В плане отладки здесь, к сожалению, ничего умнее чем оператор *tap* и логгирование не придумал, но это помогло обнаружить странное поведение на стыке последних слайдов и при рестарте по завершению в *createProgressSelector* и *createCurrentIndexSelector*

Проблема решилась через корректировку функции *changeSlideEffect* из *effects.ts*:
оператор *take* сразу привлек внимание, и сначала я пробовал изменить его аргумент в соответствии с количеством слайдов - это помогло лишь отчасти, так что в итоге я просто убрал его из пайпа

Решение:
*effects.ts* - убрать оператор *take* из *changeSlideEffect* 

#### Ошибка 7

Здесь я заметил, что изначально *createCurrentIndexSelector* и *createCurrentDataSelector* не работают, и задумался над тем, что же на самом деле такое state$ и как через него удается работать сразу нескольким *observable*. Увидел, что это *BehaviorSubject*, и с этим всё должно быть ок. 

Начал эксперименты в *index.ts*. Оказалось, что при переносе
```javascript
player.style.transform = `translateX(-${index * 100}%)`;
bars.forEach((el, i) => setScale(el, i < index ? 1 : 0));
``` 
из *createCurrentIndexSelector(state$)* в *createCurrentDataSelector(state$)* проблема решается, но не наоборот, значит проблема именно в *createCurrentIndexSelector*.

Задумался о смысле *mergeMapTo(EMPTY)*, нарисовал пару схем, он показался избыточным. Без него оба обсервабла заработали.

Решение:
*selectors.ts* - удаление оператора *mergeMapTo(EMPTY)*

#### Ошибка 8

По умолчанию должна использоваться темная тема

Решение:
*index.html* и *frame.html* - *<body class="theme_dark">*

#### Ошибка 9

Поведение кнопок смены темы, исчезновение кнопки <- на малом вьюпорте

Решение:
*index.css* - удаление медиазапроса, скрывающего кнопку <-
*state.ts* - *DEFAULT_STATE* { theme: 'dark' }
*view.ts* - с имеющейся реализацией *setElementTheme* при попытке смены темы предыдущий css-класс не удалялся - переписал через ветвления

#### Дальнейший поиск

Включил *strict-mode* в *tsconfig.json* - добавилось 13 ошибок, связанных с *null* и *undefined* значениями, а также чуть более интересные:
```typescript
TS2345: Argument of type 'MonoTypeOperatorFunction<{ readonly type: "message"; readonly action: string; readonly params: string; }>' is not assignable to parameter of type 'OperatorFunction<Action, { readonly type: "message"; readonly action: string; readonly params: string; }>'.
  Types of parameters 'source' and 'source' are incompatible.
    Type 'Observable<Action>' is not assignable to type 'Observable<{ readonly type: "message"; readonly action: string; readonly params: string; }>'.
      Type 'Action' is not assignable to type '{ readonly type: "message"; readonly action: string; readonly params: string; 
}'.
        Type '{ readonly type: "next"; }' is missing the following properties from type '{ readonly type: "message"; readonly action: string; readonly params: string; }': action, params
``` 
и
```typescript
[tsl] ERROR in D:\code\shri-2021-task-3\src\application\effects.ts(42,5)
      TS2322: Type 'Observable<unknown>' is not assignable to type 'Observable<Action>'.
  Type 'unknown' is not assignable to type 'Action'.
    Type 'unknown' is not assignable to type '{ readonly type: "update"; readonly data: Partial<Slide>; }'.
```

Добавил опционально проверки на *null*, операторы *?.* и *!*  -  ничего критичного вроде не обнаружилось.
Сделал каст *messageEffect* *as Observable\<Action>*, и похожим образом с *TS2345*. Осталось неприятное ощущение, что проблему не решил, а просто добавил заглушки. Наверное, так и есть. Также убрал *@ts-ignore* из *data.ts*, но аналоги *proxyProperty* и *die* нашлись в исходниках и issues к *immer*, так что оставил их в покое... 

##### Совсем забыл о дополнительном пожелании "прокомментировать те или иные технические решения, принятые по ходу заданий", поэтому пишу их здесь (прошу прощения).


## README по заданию 1

Первое задание было очень интересным, было неимоверно круто им заниматься, попутно оценивая еще и с преподавательской точки зрения. 

На него ушло действительно 10х времени, и я был одним из тех, кто плохо оценил временные рамки и недооценил количество деталей. В связи с этим я решил, что React/Vue и даже тот же Alpine здесь будут чересчур тяжеловесны и не нужны. Так вот, чем дальше я продвигался по ходу задания, тем больше я разочаровывался в своем изначальном выборе, но тем неуместней становилось всё переделывать. Поэтому оставил как первоначально задумывал - попытка скрестить компонентный подход и шаблонизацию (всё-таки начинал когда-то с Jinja2) через обычные шаблонные литералы.

Если бы подобную задачу поставили бы передо мною вновь - пожалуй использовал бы React/Next либо познакомился бы с Preact`ом.

Чем я доволен:
- во-первых, наконец-то я увидел неплохой дизайн, с которым было приятно работать)
- доволен что разобрался с диаграммой (ушло 2 суток без сна)
- в целом много драйва и эмоций, задание неплохо бустит

За что мне немного стыдно:
- пройдя тест на диаграмму на радостях забыл заменить просчитанный hardcode-вариант, который я использовал пытаясь попасть в трешхолд, на нормальный...
- не смог в полной мере задействовать scss, особенно по медиазапросам и переменным, и в целом не хватило консистентности (много ненужного ререндера, адаптивность второпях)
- не смог полноценно завести postcss под вебпаком, и запускать приходилось очень странными способами...
- стыдно за решение по активити (там же наверняка был адекватный способ, без абсолютирования и ручного подбора)

## Интеграция с предыдущими заданиями

#### Задание 1

Сначала перенес только собранные файлы и ассеты, но затем наткнувшись на незамеченную проблему с версткой понял, что это полумеры, и добавил исходники. 

Для сборки настроил Webpack на две отдельные конфигурации, соответственно есть два отдельных скрипта для билда в package.json (есть и общий). Есть моменты, которые стоило бы прописать аккуратнее, делал это впервые, было интересно) 

Не успел должным образом прикрутить postcss, stylelint запускается только в cli-режиме, и убрать лишние пробельные символы в шаблонах...
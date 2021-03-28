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

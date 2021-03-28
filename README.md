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

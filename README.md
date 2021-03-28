## Ошибки

#### Webpack

Отключил *perfomance hints* и выставил *mode: production*
#### Ошибка 1

[tsl] ERROR in D:\code\shri-2021-task-3\src\application\data.ts(46,14)
TS2678: Type '"update"' is not comparable to type '"message" | "next" | "prer"'.

Решение:
*actions.ts* - добавить к *type Action* объединение с ReturnType<typeof actionUpdate> 
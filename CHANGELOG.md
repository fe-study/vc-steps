<h1 align="center">vc-steps - @changelog</h1>

## 0.0.2

`2016-09-26`

- `allSteps` 属性自动补充 `status` (STEP_WAIT)
  - 仅有一个字段，就默认为文案，自动做转换 { 'title': 'title' } => { 'record': 'title' }

## 0.0.1

`2016-09-20`

- init
  - `show`, `title`, `subTitle`, `steps(Array<Object>)`, `closeable`
  - todo: 考虑是否给出step子组件,目前觉得没必要,因为就是steps数据的补充

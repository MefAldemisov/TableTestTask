# Test Task Table

## TODO list:

### Base tasks

- [x] setup repo (base): vue, vite, ts, vue-router, pinia
- [x] setup repo (optional): eslint, prettier + github actions

### Components

- [x] button
- [x] popup (may be reused for alerts potentially in the project)
- [x] confirm popup (required)
- [x] input (number)
- [x] table

### Pages

- [ ] table
- [x] form

## Interesting places for reviewer

### Button border color

I used native css in this project, because components are relatively small, therefore, most of the selectors are short. Also, native css, opposed to scss supports wonderful `currentColor` method, which was used to compute the color of the button's border

Additionally, I used the css variables to support potential temization of the app.

### Popups using native dialog element

Component from `src/components/AppPopup` is using native `dialog` tag and it's events. On form submit the dialog is closed. To use the native dialog methods, they should be exposed from the vue component.

The problem is that `defineExpose` works before component's mount, therefore, the `dialogRef` at the expose moment still has value `undefined`. It order to prevent the expose-related problems, I wrapped the exported functions into arrow functions, so that `dialogRef` will be computed at the runtime, after mounting.

```typescript
const dialogRef = ref<HTMLDialogElement | undefined>()

defineExpose({
  showModal: () => dialogRef.value?.showModal(),
  close: () => dialogRef.value?.close(),
})
```

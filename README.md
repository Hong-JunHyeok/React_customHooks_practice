# 커스텀 Hooks

## - useInput

사용 양식

```typescript
const [text, setText] = useInput({
  email: '',
  password: '',
});

return (
  <>
    <input id="email" value={text.email} onChange={setText} />
    <input id="password" value={text.password} onChange={setText} />
  </>
);
```

## - useToggle

사용 양식

```typescript
const [isChecked, toggleIsChecked] = useToggle(false);

return (
  <>
    <hr />
    <h2>useToggle</h2>
    <div onClick={() => toggleIsChecked()} style={isChecked ? toggledStyle : style}>
      {isChecked ? 'on' : 'off'}
    </div>
  </>
);
```

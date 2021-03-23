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

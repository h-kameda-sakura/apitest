const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (_req, res) => {
  res.status(200).send('hello from apitest');
});

// 50%で失敗するテスト用エンドポイント
app.get('/test', (req, res) => {
  const fail = Math.random() < 0.5; // 50%
  res.set({
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    Pragma: 'no-cache',
    Expires: '0',
  });
  if (fail) {
    console.error('[TEST] failing intentionally');
    return res.status(500).json({ ok: false, message: 'intentional failure for test' });
  } else {
    console.log('[TEST] success');
    return res.status(200).json({ ok: true, message: 'success' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

import { OAuth2Client } from "google-auth-library"

const client = new OAuth2Client();
async function verify() {
  const ticket = await client.verifyIdToken({
      idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImM3ZTExNDEwNTlhMTliMjE4MjA5YmM1YWY3YTgxYTcyMGUzOWI1MDAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI3NTE0MDcwODM5Mjgtc21ibnFicHNhM2ZoYmFicjljMTQxanRlZXUyYzhlc2YuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI3NTE0MDcwODM5Mjgtc21ibnFicHNhM2ZoYmFicjljMTQxanRlZXUyYzhlc2YuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTM0NDA5OTg2NzcxNDAyNDU0MzYiLCJlbWFpbCI6InJ5Y2hhcmRyeWFuNkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNjkzMzU0NTE1LCJuYW1lIjoiUnljaGFyZCBSeWFuIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBY0hUdGZyaTlweGtOU003VUxydDhnaW5XTm9EWGxxVDlrWFh3M3dUX1hCdldUOWNBPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlJ5Y2hhcmQiLCJmYW1pbHlfbmFtZSI6IlJ5YW4iLCJsb2NhbGUiOiJwdC1QVCIsImlhdCI6MTY5MzM1NDgxNSwiZXhwIjoxNjkzMzU4NDE1LCJqdGkiOiI1MmE0ZThiMzE2NGU0ZTVmMzk1ZjA2YjNmNDBjYTI0YWZkODhjMDgyIn0.DI-_nlyRX4cTATrTVkRUkpRuRjaE3Dd29qihhZFEQDpY4szp8hHvNLIwGspsygZwxnxE-WSRnEdtSzmVYwD136J9ZqV2zrPZzOe5lryI7Jn2DNcMS6bg4owMt_F-e6sroTSsJYjlBaAopLuC-TkVmbOnVAhxcjZjKVAciXHkKt3dOU0sw_ci8jd-l4rCgQ_ksw7K1G85vYuF2ZLjvSczctQye4lLVJ1dDyS5gxtgq-pgC66HGd3AJqw8JTnjIlDOv5I8Zf2PKeMhmOiY2FsdLTjEpz9nFTyohvlyMWtC-sYh9T0WfTwvCr_UNXllVridjazKjvFud4U5b7ZXghxyWQ",
      audience: "751407083928-smbnqbpsa3fhbabr9c141jteeu2c8esf.apps.googleusercontent.com",  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}
verify().catch(console.error);
# Certificates

The command used for generating self-signed certificates:

```bash
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes -subj "/"
```

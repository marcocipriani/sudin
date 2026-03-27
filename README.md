# 🌍 Sudin

🔗 [Netlify Dev](https://sudin.netlify.app/)

<br>

### Commands

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `npm install`       | Installs dependencies                              |
| `npm run dev`       | Starts local dev server at `localhost:3000`        |
| `npm run build`     | Build your production site to `./dist/`            |

#### Deploy to production

Requires `lftp` (`brew install lftp`). For password-free deploys, add credentials to `~/.netrc`:

```
machine 93.43.27.14
login mcweb
password YOUR_PASSWORD
```

Then `chmod 600 ~/.netrc`.

Deploy with:

```bash
npm run deploy
```

This builds the site and syncs `dist/` to the server via SFTP, uploading only changed files.

## Gallery doc
[React Photo Album](https://react-photo-album.com/documentation)

## Acknowledgements

Initially created by [onWidget](https://onwidget.com) and maintained by a community of [contributors](https://github.com/onwidget/astrowind/graphs/contributors).

## License

**AstroWind** is licensed under the MIT license — see the [LICENSE](./LICENSE.md) file for details.

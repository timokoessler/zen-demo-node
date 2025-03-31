# Zen Demo Node.js

Zen by Aikido is an embedded Web Application Firewall that autonomously protects Node.js apps against common and critical attacks.

<a href="https://idx.google.com/import?url=https%3A%2F%2Fgithub.com%2Ftimokoessler%2Fzen-demo-node">
  <picture>
    <source
      media="(prefers-color-scheme: dark)"
      srcset="https://cdn.idx.dev/btn/try_dark_32.svg">
    <source
      media="(prefers-color-scheme: light)"
      srcset="https://cdn.idx.dev/btn/try_light_32.svg">
    <img
      height="32"
      alt="Try in IDX"
      src="https://cdn.idx.dev/btn/try_purple_32.svg">
  </picture>
</a>

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/timokoessler/zen-demo-node)

It protects your Node.js apps by scanning user input and where that data eventually flows to, allowing Zen to more accurately block SQL Injections, Path traversal attacks, and more. It runs on the same server as your Node.js app for simple installation and zero maintenance.

- ✅ Secure your app like a classic web application firewall (WAF), but with none of the infrastructure or cost.
- ✅ Auto-generate API specifications
- ✅ Block known threat actors and bots.
- ✅ Geo-fencing to block or allow a selection of countries
- ✅ Rate limit specific API endpoints by IP or by user
- ✅ Allows you to block specific users manually

## Reporting to your Aikido Security dashboard

> Aikido is your no nonsense application security platform. One central system that scans your source code & cloud, shows you what vulnerabilities matter, and how to fix them - fast. So you can get back to building.

You can use some of Zen’s features without Aikido, of course. Peace of mind is just a few lines of code away. But you will get the most value by reporting your data to Aikido.

You will need an Aikido account and a token to report events to Aikido. If you don't have an account, you can [sign up for free](https://app.aikido.dev/login).

Here's how:

- [Log in to your Aikido account](https://app.aikido.dev/login).
- Go to [Zen](https://app.aikido.dev/runtime/services).
- Go to apps.
- Click on **Add app**.
- Choose a name for your app.
- Click **Generate token**.
- Copy the token.
- Set the token as an environment variable in the `.env` file

window.passport = new window.immutable.passport.Passport({
    baseConfig: new window.immutable.config.ImmutableConfiguration({
      environment: window.immutable.config.Environment.SANDBOX,
    }),
    clientId: '***************ajY', //replace it with your own client Id
    redirectUri: 'https://buzzard-large-basically.ngrok-free.app',
    logoutRedirectUri: 'https://buzzard-large-basically.ngrok-free.app/logout.html',
    audience: 'platform_api',
    scope: 'openid offline_access email transact'
  });


var getOidcConfig = function() {
  return {
    authority: 'https://accounts.magister.net',
    client_id: 'M6-' + window.location.hostname,
    redirect_uri: 'https://' + window.location.hostname + '/oidc/redirect_callback.html',
    response_type: 'id_token token',
    scope: 'openid profile',
    post_logout_redirect_uri: 'https://' + window.location.hostname + '/oidc/afterlogoff.html',
    silent_redirect_uri: 'https://' + window.location.hostname + '/oidc/silent.html',
    checkSessionInterval: 2000,
    acr_values: 'tenant:' + window.location.hostname
  };
};

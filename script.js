console.log('i\'m here');

// Checking page title
if (document.title.indexOf("FiscalNote")   !== -1 &&
    document.title.indexOf("Pull Request") !== -1 &&
    [2, 4].includes(moment().day())               &&
    moment().hour() > 8                           &&
    moment().hour() < 19) {
  $('.js-header-wrapper').append('<div class="deploy-banner" style="background: #FFEB3B; padding: 1em 2em; text-align: center;">Today is a deploy day!</div>');
}

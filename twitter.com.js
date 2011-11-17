// first, kill all the horrible bullshit they crammed into this UI

  // don't show me trending topics
  $("<style type='text/css'>.trends-inner{ display: none }</style>").appendTo("head");

  // no
  $("<style type='text/css'>.one-click-import{ display: none }</style>").appendTo("head");

  // don't show me promoted tweets
  $("<style type='text/css'>p.promo{ display: none }</style>").appendTo("head");

  // don't recommend that I follow anybody
  $("<style type='text/css'>.user-rec-component{ display: none }</style>").appendTo("head");

  // don't show me extraneous HRs either
  $("<style type='text/css'>.component-spacer{ display: none }</style>").appendTo("head");

  // in fact, just shut the fuck up
  $("<style type='text/css'>div.dashboard{ display: none }</style>").appendTo("head");
      // TODO: Twitter repopulates .dashboard occasionally, so something more severe
      // may be required.

// next, antispam hack

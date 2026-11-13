'use client';

import { useEffect } from 'react';

export default function TrackingScripts() {
  useEffect(() => {
    // 1. Jornaya LeadiD script loader
    if (!document.getElementById('LeadiDscript_campaign')) {
      try {
        const s = document.createElement('script');
        s.id = 'LeadiDscript_campaign';
        s.type = 'text/javascript';
        s.async = true;
        s.src = '//create.lidstatic.com/campaign/5d1e7497-2645-4e5b-0b83-cf1eed6467c8.js?snippet_version=2';
        const anchor = document.getElementById('LeadiDscript') || document.getElementsByTagName('script')[0];
        if (anchor && anchor.parentNode) {
          anchor.parentNode.insertBefore(s, anchor);
        } else {
          document.head.appendChild(s);
        }
      } catch (err) {
        console.error('Jornaya initialization error:', err);
      }
    }

    // 2. TrustedForm script loader
    if (!document.getElementById('trustedform_script_tag')) {
      try {
        const tf = document.createElement('script');
        tf.id = 'trustedform_script_tag';
        tf.type = 'text/javascript';
        tf.async = true;
        tf.src =
          (document.location.protocol === 'https:' ? 'https' : 'http') +
          '://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=' +
          new Date().getTime() +
          Math.random();
        const s = document.getElementsByTagName('script')[0];
        if (s && s.parentNode) {
          s.parentNode.insertBefore(tf, s);
        } else {
          document.head.appendChild(tf);
        }
      } catch (err) {
        console.error('TrustedForm initialization error:', err);
      }
    }
  }, []);

  return (
    <div id="tracking-scripts-container" className="tracking-scripts-wrapper mt-4">
      {/* Jornaya script exact below the form tags */}
      <script
        id="LeadiDscript"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function() {
var s = document.createElement('script');
s.id = 'LeadiDscript_campaign';
s.type = 'text/javascript';
s.async = true;
s.src = '//create.lidstatic.com/campaign/5d1e7497-2645-4e5b-0b83-cf1eed6467c8.js?snippet_version=2';
var LeadiDscript = document.getElementById('LeadiDscript');
if (LeadiDscript && LeadiDscript.parentNode) {
  LeadiDscript.parentNode.insertBefore(s, LeadiDscript);
}
})();`,
        }}
      />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<img src='//create.leadid.com/noscript.gif?lac=A7AE383F-5A16-755E-F87B-F9FAB6D10A94&lck=5d1e7497-2645-4e5b-0b83-cf1eed6467c8&snippet_version=2' />`,
        }}
      />

      {/* TrustedForm script exact below the form tags */}
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function() {
var tf = document.createElement('script');
tf.type = 'text/javascript';
tf.async = true;
tf.src = ("https:" == document.location.protocol ? 'https' : 'http') +
  '://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=' +
  new Date().getTime() + Math.random();
var s = document.getElementsByTagName('script')[0];
if (s && s.parentNode) {
  s.parentNode.insertBefore(tf, s);
}
})();`,
        }}
      />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<img src='https://api.trustedform.com/ns.gif' />`,
        }}
      />
    </div>
  );
}

#!/bin/bash
# i18ndude should be available in current $PATH (eg by running
# ``export PATH=$PATH:$BUILDOUT_DIR/bin`` when i18ndude is located in your buildout's bin directory)
#
# For every language you want to translate into you need a
# locales/[language]/LC_MESSAGES/redturtle.agidtheme.po
# (e.g. locales/de/LC_MESSAGES/redturtle.agidtheme.po)

domain=redturtle.agidtheme

i18ndude rebuild-pot --pot $domain.pot --create $domain --merge manual.pot ../
i18ndude sync --pot $domain.pot */LC_MESSAGES/$domain.po

#!/bin/bash

# i18ndude should be available in current $PATH (eg by running
# ``export PATH=$PATH:$BUILDOUT_DIR/bin`` when i18ndude is located in your buildout's bin directory)
#
# For every language you want to translate into you need a
# locales/[language]/LC_MESSAGES/design.plone.theme.po
# (e.g. locales/de/LC_MESSAGES/design.plone.theme.po)

pkg_domain=design.plone.theme

i18ndude rebuild-pot --pot $pkg_domain.pot --create $pkg_domain --merge manual.pot ../

declare -a domains=( design.plone.theme plone z3c.form collective.z3cform.wizard)
for domain in "${domains[@]}"
do
    i18ndude sync --pot $domain.pot */LC_MESSAGES/$domain.po
done


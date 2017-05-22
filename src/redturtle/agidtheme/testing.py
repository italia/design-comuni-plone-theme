# -*- coding: utf-8 -*-
from plone.app.contenttypes.testing import PLONE_APP_CONTENTTYPES_FIXTURE
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PloneSandboxLayer
from plone.testing import z2

import redturtle.agidtheme


class RedturtleAgidthemeLayer(PloneSandboxLayer):

    defaultBases = (PLONE_APP_CONTENTTYPES_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        # Load any other ZCML that is required for your tests.
        # The z3c.autoinclude feature is disabled in the Plone fixture base
        # layer.
        self.loadZCML(package=redturtle.agidtheme)

    def setUpPloneSite(self, portal):
        applyProfile(portal, 'redturtle.agidtheme:default')


REDTURTLE_AGIDTHEME_FIXTURE = RedturtleAgidthemeLayer()


REDTURTLE_AGIDTHEME_INTEGRATION_TESTING = IntegrationTesting(
    bases=(REDTURTLE_AGIDTHEME_FIXTURE,),
    name='RedturtleAgidthemeLayer:IntegrationTesting'
)


REDTURTLE_AGIDTHEME_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(REDTURTLE_AGIDTHEME_FIXTURE,),
    name='RedturtleAgidthemeLayer:FunctionalTesting'
)


REDTURTLE_AGIDTHEME_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        REDTURTLE_AGIDTHEME_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE
    ),
    name='RedturtleAgidthemeLayer:AcceptanceTesting'
)

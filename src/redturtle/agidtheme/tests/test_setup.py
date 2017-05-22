# -*- coding: utf-8 -*-
"""Setup tests for this package."""
from plone import api
from redturtle.agidtheme.testing import REDTURTLE_AGIDTHEME_INTEGRATION_TESTING  # noqa

import unittest


class TestSetup(unittest.TestCase):
    """Test that redturtle.agidtheme is properly installed."""

    layer = REDTURTLE_AGIDTHEME_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_product_installed(self):
        """Test if redturtle.agidtheme is installed."""
        self.assertTrue(self.installer.isProductInstalled(
            'redturtle.agidtheme'))

    def test_browserlayer(self):
        """Test that IRedturtleAgidthemeLayer is registered."""
        from redturtle.agidtheme.interfaces import (
            IRedturtleAgidthemeLayer)
        from plone.browserlayer import utils
        self.assertIn(IRedturtleAgidthemeLayer, utils.registered_layers())


class TestUninstall(unittest.TestCase):

    layer = REDTURTLE_AGIDTHEME_INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')
        self.installer.uninstallProducts(['redturtle.agidtheme'])

    def test_product_uninstalled(self):
        """Test if redturtle.agidtheme is cleanly uninstalled."""
        self.assertFalse(self.installer.isProductInstalled(
            'redturtle.agidtheme'))

    def test_browserlayer_removed(self):
        """Test that IRedturtleAgidthemeLayer is removed."""
        from redturtle.agidtheme.interfaces import \
            IRedturtleAgidthemeLayer
        from plone.browserlayer import utils
        self.assertNotIn(IRedturtleAgidthemeLayer, utils.registered_layers())

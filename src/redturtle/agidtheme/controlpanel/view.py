# -*- coding: utf-8 -*-
from plone.app.registry.browser import controlpanel
from redturtle.agidtheme.controlpanel.interfaces import IRedturtleAgidthemeSettings  # noqa


class RedturtleAgidthemeEditForm(controlpanel.RegistryEditForm):
    """settings form."""
    schema = IRedturtleAgidthemeSettings
    id = 'RedturtleAgidthemeSettingsEditForm'
    label = u'Configurazione tema agid'
    description = u''


class RedturtleAgidthemeSettingsControlPanel(controlpanel.ControlPanelFormWrapper):  # noqa
    """settings control panel.
    """
    form = RedturtleAgidthemeEditForm

# -*- coding: utf-8 -*-
from plone.app.registry.browser import controlpanel
from redturtle.agidtheme.controlpanel.interfaces import IRedturtleAgidthemeSettings


class RedturtleAgidthemeEditForm(controlpanel.RegistryEditForm):
    """settings form."""
    schema = IRedturtleAgidthemeSettings
    id = "RedturtleAgidthemeSettingsEditForm"
    label = u"Configurazione tema agid"
    description = u""


class RedturtleAgidthemeSettingsControlPanel(controlpanel.ControlPanelFormWrapper):
    """Analytics settings control panel.
    """
    form = RedturtleAgidthemeEditForm

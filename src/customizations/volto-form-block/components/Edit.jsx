/**
 * Edit Form block.
 * @module components/ItaliaTheme/Blocks/Form/Edit
 *
 * CUSTOMIZATIONS:
 * - customized to use design-react-kit elements instead semantic-ui elements
 * - renamed menu item "Data" to "Dati"
 */

import React from 'react';
import { defineMessages } from 'react-intl';
import { Card, CardBody, Button, Row, Col } from 'design-react-kit';
import { TabPane, Tab } from 'semantic-ui-react';
import {
  withDNDContext,
  SubblocksEdit,
  SubblocksWrapper,
} from 'volto-subblocks';

import { SidebarPortal } from '@plone/volto/components';

import EditBlock from 'volto-form-block/components/EditBlock';
import Sidebar from 'volto-form-block/components/Sidebar';
import DataTable from 'volto-form-block/components/DataTable';
import ValidateConfigForm from 'volto-form-block/components/ValidateConfigForm';
import config from '@plone/volto/registry';

const messages = defineMessages({
  addField: {
    id: 'Add field',
    defaultMessage: 'Aggiungi un campo',
  },
  default_submit_label: {
    id: 'form_default_submit_label',
    defaultMessage: 'Invia',
  },
  default_cancel_label: {
    id: 'form_default_cancel_label',
    defaultMessage: 'Annulla',
  },
  warning: {
    id: 'form_edit_warning',
    defaultMessage: 'Attenzione!',
  },
  warning_from: {
    id: 'form_edit_warning_from',
    defaultMessage:
      'Inserire un campo di tipo "E-mail mittente". Se non è presente, oppure è presente ma non viene compilato dall\'utente, l\'indirizzo del mittente della mail sarà quello configurato dalla sidebar di destra.',
  },
  warning_enable_save: {
    id: 'warning_enable_save',
    defaultMessage:
      'Selezionare la voce "Salva i dati compilati" nella barra laterale per abilitare il salvataggio e la visualizzazione dei dati',
  },
});

/**
 * Edit Form block class.
 * @class Edit
 * @extends Component
 */
class Edit extends SubblocksEdit {
  componentDidMount() {
    super.componentDidMount();

    if (!this.props.data.default_from) {
      this.props.onChangeBlock(this.props.block, {
        ...this.props.data,
        default_from: 'noreply@plone.org',
        lastChange: new Date().getTime(),
      });
    }
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */

  render() {
    if (__SERVER__) {
      return <div />;
    }

    const datatableEnabled =
      config.blocks.blocksConfig.form.enableDatatableView;

    return (
      <div className="public-ui">
        <ValidateConfigForm
          data={this.props.data}
          onEdit={true}
          onChangeBlock={(data) => {
            this.props.onChangeBlock(this.props.block, data);
          }}
        >
          <div className="px-4 py-5">
            {this.props?.data?.title && <h2>{this.props.data.title}</h2>}
            {this.props?.data?.description && (
              <div className="block-description">
                {this.props.data.description}
              </div>
            )}
            <Tab
              panes={[
                {
                  menuItem: 'Form',
                  render: () => (
                    <TabPane>
                      <Card
                        className="card-bg rounded py-3"
                        noWrapper={false}
                        tag="div"
                      >
                        <CardBody tag="div">
                          <SubblocksWrapper node={this.node}>
                            {/*this.state.subblocks.filter((s) => s.field_type === 'from')
                  .length == 0 && (
                  <Alert color="warning" fade isOpen tag="div">
                    <h4>{this.props.intl.formatMessage(messages.warning)}</h4>
                    <p>
                      {this.props.intl.formatMessage(messages.warning_from)}
                    </p>
                  </Alert>
                )*/}

                            {this.state.subblocks.map((subblock, subindex) => (
                              <div className="form-field" key={subblock.id}>
                                <EditBlock
                                  data={subblock}
                                  index={subindex}
                                  selected={this.isSubblockSelected(subindex)}
                                  {...this.subblockProps}
                                  openObjectBrowser={
                                    this.props.openObjectBrowser
                                  }
                                />
                              </div>
                            ))}

                            {this.props.selected && (
                              <div className="form-field">
                                {this.renderAddBlockButton(
                                  this.props.intl.formatMessage(
                                    messages.addField,
                                  ),
                                )}
                              </div>
                            )}

                            <Row>
                              <Col align="center">
                                {this.props.data?.show_cancel && (
                                  <Button color="secondary" className="me-2">
                                    {this.props.data.cancel_label ||
                                      this.props.intl.formatMessage(
                                        messages.default_cancel_label,
                                      )}
                                  </Button>
                                )}
                                <Button color="primary">
                                  {this.props.data.submit_label ||
                                    this.props.intl.formatMessage(
                                      messages.default_submit_label,
                                    )}
                                </Button>
                              </Col>
                            </Row>
                          </SubblocksWrapper>
                        </CardBody>
                      </Card>
                    </TabPane>
                  ),
                },
                ...(datatableEnabled
                  ? [
                      {
                        menuItem: 'Dati',
                        render: () => (
                          <TabPane className="container">
                            {this.props.data.store ? (
                              <DataTable
                                properties={this.props.properties}
                                blockId={this.props.block}
                                removeDataAfterDays={
                                  this.props.data.remove_data_after_days
                                }
                              />
                            ) : (
                              <p>
                                {this.props.intl.formatMessage(
                                  messages.warning_enable_save,
                                )}
                              </p>
                            )}
                          </TabPane>
                        ),
                      },
                    ]
                  : []),
              ]}
            />
          </div>
        </ValidateConfigForm>

        <SidebarPortal selected={this.props.selected || false}>
          <Sidebar
            {...this.props}
            data={this.props.data}
            block={this.props.block}
            onChangeBlock={this.props.onChangeBlock}
            onChangeSubBlock={this.onChangeSubblocks}
            selected={this.state.subIndexSelected}
            setSelected={this.onSubblockChangeFocus}
            openObjectBrowser={this.props.openObjectBrowser}
            properties={
              this.props.metadata?.['@id']
                ? this.props.metadata
                : this.props.properties
            }
          />
        </SidebarPortal>
      </div>
    );
  }
}

export default React.memo(withDNDContext(Edit));

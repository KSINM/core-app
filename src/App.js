import React, { Component } from 'react';
import {
  Paper,Droppable,Draggable,DragDropContext,Radio,
  Empty,Icon,Label,ModuleTitle,Breadcrumb,Popover,Menu,
  Divider,Button,BusyLoader,Badge,Avatar,Switcher,Scrollbar,
  SkeletonLoader,TextLink,Time,Title,Alert,Checkbox,Collapse,
  Panel,DatePickerInput,ExtendedInput,Uploader,Col,Row,Holder,
  MobileNavigation,MobileProducts,Modal,Notification,Overlay,
  Pagination,Profile,Progress,RadioGroup,Range,Search,Section,
  Slider,Status,Steps,Step,Tabs,Tab,Tag,Timeline,TimelineItem,
  Tooltip,ValidatableNumberInput,Widget,CheckboxGroup,Dropdown,
  Editor,Form,ValidatableDatePicker,Overspread,SearchWithDropdown,
  Toaster,
} from 'bet-core-ui';

import './App.css';

//----DragnDrop
// fake data generator
const getItems = (count, offset = 0) =>
  Array(count).fill().map((_, index) => ({
    id: `item-${index + offset}`,
    content: `item ${index + offset}`,
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);

  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = [...source];
  const destClone = [...destination];
  const result = {};

  const [removed] = sourceClone.splice(droppableSource.index, 1);
  destClone.splice(droppableDestination.index, 0, removed);

  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: 8,
  width: 250,
});

//-------------
const dropDownData = Array(200).fill().map((_, i) => {
  return {
    label: 'Product' + i,
    value: 'product' + i,
  }
});
const selectorData = [
  {
    label: '13 items',
    value: 13,
  },
  {
    label: '26 items',
    value: 26,
  },
  {
    label: '39 items',
    value: 39,
  },
  {
    label: 'All',
    value: 'all',
  },
];
const optionData = [
  {title: 'Action 1'},
  {title: 'Action 2'},
  {title: 'Action 3'},
];
const columns = [
  {
    text: 'User ID',
    sortable: true,
    resizable: true,
    draggable: true,
    dataKey: 'userId',
    colRenderer: () => 'rest',
  },
  {
    text: 'Username',
    sortable: true,
    resizable: true,
    draggable: true,
    dataKey: 'username',
  },
  {
    text: 'First Name',
    sortable: true,
    resizable: true,
    draggable: true,
    dataKey: 'firstName',
  },
  {
    text: 'Last Name',
    sortable: true,
    resizable: true,
    draggable: true,
    dataKey: 'lastName',
  },
  {
    text: 'CashDesk Name',
    sortable: true,
    resizable: true,
    draggable: true,
    dataKey: 'cacheDeskName',
  },
  {
    text: 'Status',
    sortable: true,
    resizable: true,
    draggable: true,
    dataKey: 'status',
  },
  {
    text: 'Stakes (AMD)',
    sortable: true,
    resizable: true,
    draggable: true,
    dataKey: 'stakes',
  },
  {
    text: 'Winning (AMD)',
    sortable: true,
    resizable: true,
    draggable: true,
    dataKey: 'winning',
  },
  {
    text: 'P/L (AMD)',
    sortable: true,
    resizable: true,
    draggable: true,
    dataKey: 'pl',
  },
  {
    text: 'Profitability',
    sortable: true,
    resizable: true,
    draggable: true,
    dataKey: 'profitability',
    // colRenderer: (displayText, index, row, isEditActive) => isEdit ? <ExtendedInput value={text[index]} onClick={e => e.stopPropagation()} onChange={e => onChange(e, index, dataKey)} /> : text[index],
    sortFn: (prev, next, type, dataKey) => console.log({ prev, next, type, dataKey, }),
  },
  {
    text: 'Stakes (AMD)',
    sortable: true,
    resizable: true,
    draggable: true,
    dataKey: 'pla',
  },
];
const dataForTitleWithOptions = [
  {label: 'Title 1', value: 1},
  {label: 'Title 2', value: 2},
  {label: 'Title 3', value: 3},
];
const options = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 },
];
const headerActions = (
  <>
    <Button appearance="minimal" size="big" icon="bc-icon-arrow-down" />
    <Button appearance="minimal" size="big" icon="bc-icon-arrow-up" />
    <Divider type="vertical" />
    <Button appearance="minimal" size="big" icon="bc-icon-edit" />
    <Button appearance="minimal" size="big" icon="bc-icon-more-vertical" />
  </>
);

const footer = (
  <>
    <Button color="default" appearance="minimal">Manage</Button>
    <Button color="confirm">Apply</Button>
  </>
);
const horizontalSizes = ['half', 'wide', 'minimal'];
const sizes = [
  'small',
  'medium',
  'big',
];
const positions = [
  'top',
  'right',
  'bottom',
  'left',
];
const mobileProductsList = Array(12).fill().map((_, i) => {
  return {
    title: 'Product' + i,
    slug: 'product' + i,
    icon: 'bc-icon-apps',
  }
});

const mobileProductsFavoritesList = Array(3).fill().map((_, i) => {
  return {
    title: 'Product' + i,
    slug: 'product' + i,
    icon: 'bc-icon-apps',
  }
});
const list = [
  {
    title: 'Filters',
    slug: 'filters',
    icon: 'bc-icon-apps',
    disabled: true,
  },
  {
    title: 'Products',
    slug: 'products',
    icon: 'bc-icon-apps',
  },
  {
    title: 'Profile',
    slug: 'profile',
    icon: 'bc-icon-apps',
  },
];
const popoverData = [
  {
    title: 'Menu 1',
    children: [
      {
        title: 'Menu 1-1',
      },
    ],
  },
  {
    title: 'Menu 2',
    children: [
      {
        title: 'Menu 2-1',
        children: [
          {
            title: 'Menu 2-1-1',
            children: [
              {
                title: 'Menu 2-1-1-1'
              }
            ],
          }
        ],
      },
      {
        title: 'Menu 2-2',
      },
    ],
  },
];
const breadcrumbData = [
  {
    title: 'Title 1',
    slug: 'title1',
  },
  {
    title: 'Title 2',
    slug: 'title2',
  },
  {
    title: 'Title 3',
    slug: 'title3',
  },
  {
    title: 'Title 4',
    slug: 'title4',
  },
  {
    title: 'Title 5',
    slug: 'title5',
  },
  {
    title: 'Title 6',
    slug: 'title6',
  },
];
const data = [
  {
    title: 'Title 1',
    slug: 'title1',
  },
  {
    title: 'Title 2',
    slug: 'title2',
  },
  {
    title: 'Title 3',
    slug: 'title3',
  },
  {
    title: 'Title 4',
    slug: 'title4',
  },
  {
    title: 'Title 5',
    slug: 'title5',
  },
  {
    title: 'Title 6',
    slug: 'title6',
  },
];
const menuData = [
  {
    title: 'Menu 1',
    children: [
      {
        title: 'Menu 1-1',
      },
    ],
  },
  {
    title: 'Menu 2',
    children: [
      {
        title: 'Menu 2-1',
        children: [
          {
            title: 'Menu 2-1-1',
            children: [
              {
                title: 'Menu 2-1-1-1'
              }
            ],
          }
        ],
      },
      {
        title: 'Menu 2-2',
      },
    ],
  },
];

// update mechanism for this section is under consideration
const breakPoints = {
  // screens
  xs: 576,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 1600,
};
const mobileScreenSize = process.env.REACT_APP_MOBILE_SIZE || breakPoints.lg;
const screenTypes = [
  'desktop',
  'mobile',
];
const colors = [
  'primary',
  'confirm',
  'danger',
];
const radius = [
  'default-radius',
  'full-radius'
];
const inputConfig = {
  type: [
    'text',
    'color',
    'number',
    'password',
    'textarea',
  ],
  appearance: [
    'outline',
    'minimal',
    'light',
  ],
  size: [
    'small',
    'default',
    'big',
  ],
  flexibility: [
    'full-width',
    'content-size',
  ],
  itemsDirection: [
    'start',
    'end',
  ],
  cornerRadius: [
    'full-radius',
    'smooth-radius',
  ],
  labelAppearance: [
    'none',
    'title',
    'swap',
  ],
};
const titleConfig = {
  color: [
    'base',
    'hero',
  ],
};
const checkboxRadioSwitcherConfig = {
  size: [
    'small',
    'big',
  ],
  labelPosition: [
    'right',
    'left',
    'top',
    'bottom',
  ],
  labelAlignment: [
    'start',
    'center',
    'end',
  ],
};
const alertTypes = [
  'success',
  'info',
  'warning',
  'error',
  'note',
  'message',
];

class App extends Component {

  //----DragnDrop

  constructor(props) {
    super(props);

    // ATOMS
    this.switcherRef = React.createRef();
    this.buttonRef = React.createRef();
    this.textLinkRef = React.createRef();
    this.labelRef = React.createRef();
    this.paperRef = React.createRef();
    this.dividerRef = React.createRef();
    this.radioRef = React.createRef();
    this.iconRef = React.createRef();
    this.avatarRef = React.createRef();
    this.badgeRef = React.createRef();
    this.busyLoaderRef = React.createRef();
    this.skeletonLoaderRef = React.createRef();
    this.scrollbarRef = React.createRef();
    this.moduleTitleRef = React.createRef();
    this.timeRef = React.createRef();
    this.emptyRef = React.createRef();
    this.dragnDropRef = React.createRef();
    this.popoverRef = React.createRef();
    this.titleRef = React.createRef();

    // MOLECULES
    this.tagRef = React.createRef();
    this.tabsRef = React.createRef();
    this.hridRef = React.createRef();
    this.progressRef = React.createRef();
    this.alertRef = React.createRef();
    this.stepsRef = React.createRef();
    this.modalRef = React.createRef();
    this.widgetRef = React.createRef();
    this.statusRef = React.createRef();
    this.menuRef = React.createRef();
    this.sliderRef = React.createRef();
    this.rangeRef = React.createRef();
    this.overlayRef = React.createRef();
    this.tooltipRef = React.createRef();
    this.profileRef = React.createRef();
    this.timelineRef = React.createRef();
    this.checkboxRef = React.createRef();
    this.collapseRef = React.createRef();
    this.datePickerInputRef = React.createRef();
    this.paginationRef = React.createRef();
    this.radioGroupRef = React.createRef();
    this.notificationRef = React.createRef();
    this.rxtendedInputRef = React.createRef();
    this.validatableElementsRef = React.createRef();
    this.fileUploadRef = React.createRef();
    this.imageUploadRef = React.createRef();
    this.mobileNavigationRef = React.createRef();
    this.mobileProductsRef = React.createRef();
    this.searchRef = React.createRef();
    this.breadcrumbRef = React.createRef();
    this.holderRef = React.createRef();
    this.sectionRef = React.createRef();

    // ORGANISMS
    this.dropdownRef = React.createRef();
    this.formRef = React.createRef();
    this.datePickerRef = React.createRef();
    this.editorRef = React.createRef();
    this.checkboxGroupRef = React.createRef();
    this.toasterRef = React.createRef();
    this.tableRef = React.createRef();
    this.searchWithDropdownRef = React.createRef();
    this.overspreadRef = React.createRef();
  }

  state = {
    items: getItems(10),
    selected: getItems(5, 10),
  };

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  id2List = {
    droppable: 'items',
    droppable2: 'selected'
  };

  getList = id => this.state[this.id2List[id]];

  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      const nextState = source.droppableId === 'droppable2' ? { selected: items } : { items };

      this.setState(nextState);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination,
      );

      this.setState({
        items: result.droppable,
        selected: result.droppable2,
      });
    }
  };

  //-------

  render() {
    return (
      <div className="App">
        <h2>=========ATOMS=========</h2>
        {/* Switcher */}
        <div>
          <div>
            <br/>
            <h3>Switcher</h3>
            <br/>
            <Switcher
              ref={this.switcherRef}
              onText={'On'}
              offText={'Off'}
              size={checkboxRadioSwitcherConfig.size[0]}
              label={'Label'}
              labelPosition={checkboxRadioSwitcherConfig.labelPosition[0]}
              labelAlignment={checkboxRadioSwitcherConfig.labelAlignment[0]}
              description={''}
              readOnly={false}
              disabled={false}
              required={false}
              isValid={true}
              errorText={'Error text goes here'}
              defaultChecked={true}
            />
            <br/>
            <br/>
          </div>
          <div>
            <br/>
            <h3>Avatar</h3>
            <br/>
            <Avatar
              src="https://images4.alphacoders.com/767/76754.jpg"
              size="big"
              shape="circle"
            />
            <br/>
            <br/>
          </div>
          <div>
            <br/>
            <h3>Badge</h3>
            <br/>
            <Badge dot size="huge">
              <Avatar shape="square" icon="bc-icon-apps"/>
            </Badge>
            <br/>
            <br/>
          </div>
          <div>
            <br/>
            <h3>BusyLoader</h3>
            <br/>
            <BusyLoader isBusy type="bubbles" />
            <br/>
            <br/>
          </div>
          <div>
            <br/>
            <h3>Button</h3>
            <br/>
            <Button color="primary" appearance="minimal" ref={this.buttonRef}>Test button</Button>
            <br/>
            <br/>
          </div>
          <div>
            <br/>
            <h3>Divider</h3>
            <br/>
            <Divider type="horizontal" />
            <br/>
            <br/>
          </div>
          <div>
            <br/>
            <h3>DragnDrop</h3>
            <br/>
            <>
              <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <DragDropContext onDragEnd={this.onDragEnd}>
                  <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef} className="dragable-preview-sb"
                      >
                        {this.state.items.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <Paper
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                Drag me {index}
                              </Paper>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                  <Droppable droppableId="droppable2">
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        className="dragable-preview-sb"
                      >
                        {this.state.selected.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <Paper
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                Drag me {index}
                              </Paper>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
            </>
            <br/>
            <br/>
          </div>
          {/* Empty */}
          <div>
            <br/>
            <h3>Empty</h3>
            <br/>
            <Empty withImage />
            <br/>
            <br/>
          </div>
          {/* Icon */}
          <div>
            <br/>
            <h3>Icon</h3>
            <br/>
            <Icon type="bc-icon-apps" />
            <br/>
            <br/>
          </div>
          {/* Label */}
          <div>
            <br/>
            <h3>Label</h3>
            <br/>
            <Label size="heading">Heading Label</Label>
            <br/>
            <br/>
          </div>
          {/* ModuleTitle */}
          <div>
            <br/>
            <h3>ModuleTitle</h3>
            <br/>
            <ModuleTitle
              title={<Breadcrumb data={data} collapsed />}
              cornerRadius="full-radius"
            />
            <br/>
            <br/>
          </div>
          {/* Paper */}
          <div>
            <br/>
            <h3>Paper</h3>
            <br/>
            <Paper ref={this.paperRef} ><img alt="ff" src="https://thumbs.dreamstime.com/z/line-paper-clipping-path-502862.jpg" /></Paper>
            <br/>
            <br/>
          </div>
          {/* Popover PROBLEM*/}
          <div>
            <br/>
            <h3>Popover</h3>
            <br/>
            <Popover
              ref={this.popoverRef}
              isPopoverVisible
              Content={() => <Menu data={popoverData} />}
            >
              <Icon type="bc-icon-apps" />
              {/* Click me */}
            </Popover>
            <br/>
            <br/>
          </div>
          {/* Radio */}
          <div>
            <br/>
            <h3>Radio</h3>
            <br/>
            <Radio ref={this.radioRef} />
            <br/>
            <br/>
          </div>
          {/* Scrollbar */}
          <div>
            <br/>
            <h3>Scrollbar</h3>
            <br/>
            <Scrollbar>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel semper dolor. Etiam consequat eget lorem sit amet tempor. Mauris at dolor bibendum, vehicula lorem sed, facilisis sapien. Suspendisse eget erat non odio lacinia ultricies. Cras viverra ipsum sed enim pulvinar rutrum. Sed vitae lacinia augue, ut lacinia purus. Mauris ac est tortor. Nunc vehicula fringilla ullamcorper. Phasellus vulputate, sem in pellentesque consectetur, ex nisl ultricies risus, accumsan bibendum orci justo ac ante. Sed sodales ut nisi sit amet sodales. Aliquam ex diam, posuere non ipsum eget, iaculis condimentum arcu.

                Curabitur vitae velit turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque fringilla consequat nibh, in rutrum dui auctor non. Nam mollis sed arcu non iaculis. Cras tincidunt ex quis urna elementum, id pretium erat dignissim. Duis sed consectetur mi, sed pulvinar nisl. Phasellus feugiat mattis pretium. Pellentesque suscipit hendrerit augue eu pellentesque. Proin tincidunt ultrices ultrices. Curabitur eu ipsum vitae lectus euismod dictum. Phasellus tristique suscipit dolor, eget ullamcorper dolor pharetra sit amet. Morbi tincidunt lectus eu mi porta sagittis. Donec id ullamcorper sem.

                Pellentesque maximus urna in luctus convallis. Nam sit amet elementum velit. Duis dignissim lacus vitae quam scelerisque tristique. Fusce egestas dolor justo, quis sagittis arcu gravida a. Proin ac purus placerat, cursus odio et, tempus purus. Suspendisse vel faucibus nulla. Nam lobortis dignissim massa, suscipit aliquet quam dignissim nec. Nunc cursus blandit faucibus.

                Donec sed orci sagittis, malesuada dui nec, iaculis dui. Duis imperdiet nisi iaculis, placerat mi id, posuere sem. Donec efficitur congue libero, sed viverra leo accumsan sed. Cras interdum, ante posuere faucibus pharetra, sapien risus tincidunt elit, sed varius quam felis vitae libero. Aliquam non vulputate quam. Donec finibus sapien sit amet laoreet interdum. Nulla eu elit augue. Integer ut nibh faucibus justo ornare euismod eget non lorem. Nam euismod, libero nec pharetra pharetra, tortor ipsum posuere lorem, vitae egestas nunc ipsum quis dui. Aenean pulvinar ante magna, suscipit commodo massa varius a. Pellentesque lacinia egestas tincidunt. Phasellus eu risus diam. Phasellus in orci quis risus pellentesque consectetur.

                Sed pulvinar a massa eu consequat. Etiam vel blandit dolor. Integer blandit id enim vitae feugiat. Etiam velit ipsum, dapibus non nisl nec, feugiat posuere diam. Nullam iaculis velit eu justo elementum iaculis. Vivamus pharetra risus scelerisque justo condimentum volutpat. Duis velit neque, lobortis fermentum varius vel, bibendum vitae augue. Ut in felis non ligula volutpat tempus vitae a ipsum. Nulla eleifend, dolor non scelerisque ultrices, mi nisi pretium tortor, a efficitur urna odio ut justo. Nunc vel elit id tellus convallis tempus. Fusce efficitur est viverra magna facilisis, eget tristique magna lobortis. Duis magna lectus, fermentum quis ornare sit amet, rutrum nec urna. Vestibulum suscipit lobortis augue eu rutrum. Cras id fermentum erat. Aliquam erat volutpat.
            </Scrollbar>
            <br/>
            <br/>
          </div>
          {/* SkeletonLoader */}
          <div>
            <br/>
            <h3>SkeletonLoader</h3>
            <br/>
            <SkeletonLoader isBusy circle>Circle is opened</SkeletonLoader>
            <br/>
            <br/>
          </div>
          {/* TextLink */}
          <div>
            <br/>
            <h3>TextLink</h3>
            <br/>
            <TextLink>Some link</TextLink>
            <br/>
            <br/>
          </div>
          {/* Time */}
          <div>
            <br/>
            <h3>Time</h3>
            <br/>
            <Time showSeconds />
            <br/>
            <br/>
          </div>
          {/* Title */}
          <div>
            <br/>
            <h3>Title</h3>
            <br/>
            <Title text="hello" />
            <br/>
            <br/>
          </div>
      
        </div>
        <br/>
        <br/>
        <br/>
        <h2>=========MOLECULES=========</h2>
        <div>
          {/* Alert */}
          <div>
            <br/>
            <h3>Alert</h3>
            <br/>
            <Alert
              closable={false}
              title="Alert"
              message="has no close icon"
              type={alertTypes[0]}
              swapIcon={<Icon type="bc-icon-apps" />}
              iconProps={{isFilled:true}}
              isFilled={true}
              screenType={screenTypes[0]}
            />
            <br/>
            <br/>
          </div>
          {/* Breadcrumb */}
          <div>
            <br/>
            <h3>Breadcrumb</h3>
            <br/>
            <Breadcrumb
              collapsed={true}
              data={breadcrumbData}
            />
            <br/>
            <br/>
          </div>
          {/* Checkbox */}
          <div>
            <br/>
            <h3>Checkbox</h3>
            <br/>
            <Checkbox label="Custom label" />
            <br/>
            <br/>
          </div>
          {/* Collapse 
            PROBLEM
            Collapse.propTypes = {
            children: PropTypes.oneOf([PropTypes.instanceOf(Panel), PropTypes.arrayOf(PropTypes.instanceOf(Panel))]),
          */}
          <div>
            <br/>
            <h3>Collapse</h3>
            <br/>
            <Collapse
              expandIcon={() => <Icon type="bc-icon-apps"/>}
              activeKeys={['1']}
            >
              <Panel
                title="Title 1"
                disabled
                showIcon
              >
                <h3>Content 1</h3>
              </Panel>
              <Panel
                title="Title 2"
                showIcon={false}
              >
                <h3>Content 2</h3>
              </Panel>
              <Panel
                title="Title 3"
              >
                <h3>Content 3</h3>
              </Panel>
            </Collapse>
            <br/>
            <br/>
          </div>
          {/* DatePickerInput */}
          <div>
            <br/>
            <h3>DatePickerInput</h3>
            <br/>
            <DatePickerInput withoutPicker/>
            <br/>
            <br/>
          </div>
          {/* ExtendedInput */}
          <div>
            <br/>
            <h3>ExtendedInput</h3>
            <br/>
            <ExtendedInput value="Lorem ipsum dolor sit amet" readOnly />
            <br/>
            <br/>
          </div>
          {/* FileUpload */}
          <div>
            <br/>
            <h3>FileUpload</h3>
            <br/>
            <Uploader
              fileAppearance={'attachment'}
              label={'Upload File'}
              uploadLabel={'Start Upload'}
              maxFileSize={5000000}
              allTypesAccepted
              isActiveDrop
            />
            <br/>
            <br/>
          </div>
          {/* ImageUpload */}
          <div>
            <br/>
            <h3>ImageUpload</h3>
            <br/>
            <Uploader
              imageAppearance={'appearance-1'}
              label={'Upload'}
              uploadLabel={'Start Upload'}
              maxFileSize={5000000}
              allTypesAccepted
              isActiveDrop
              isImageUpload
            />
            <br/>
            <br/>
          </div>
          {/* QuarteredGrid */}
          <div>
            <br/>
            <h3>QuarteredGrid</h3>
            <br/>
            <Row className="story-grid">
              {Array(4).fill().map((_, index) => <Col key={index} size={3}>Column</Col>)}
            </Row>
            <br/>
            <br/>
          </div>
          {/* FilterHolder */}
          <div style={{'padding': '20px','minHeight': '500px','transform': 'translate3d(0, 0, 0)',background: 'red'}}>
            <br/>
            <h3>FilterHolder</h3>
            <br/>
            <Holder title="Filters" position="right">
              <div className="filter-title">Filter 1</div>
              <ExtendedInput
                showIconOnValid={false}
                colorOnValid={false}
                placeholder="Simple filter"
                size="big"
              />
              <ExtendedInput
                showIconOnValid={false}
                colorOnValid={false}
                placeholder="Simple filter"
                size="big"
              />
              <ExtendedInput
                showIconOnValid={false}
                colorOnValid={false}
                placeholder="Simple filter"
                size="big"
              />
              <ExtendedInput
                showIconOnValid={false}
                colorOnValid={false}
                placeholder="Simple filter"
                size="big"
              />
              <div className="filter-title">Filter 3</div>
              <ExtendedInput
                showIconOnValid={false}
                colorOnValid={false}
                placeholder="Simple filter"
                size="big"
              />
              <ExtendedInput
                showIconOnValid={false}
                colorOnValid={false}
                placeholder="Simple filter"
                size="big"
              />
            </Holder>
            <br/>
            <br/>
          </div>
          {/* Menu */}
          <div>
            <br/>
            <h3>Menu</h3>
            <br/>
            <Menu data={menuData}>Menu opener</Menu>
            <br/>
            <br/>
          </div>
          {/* MobileNavigation */}
          <div style={{'padding': '20px','minHeight': '100px','transform': 'translate3d(0, 0, 0)',background: 'red'}}>
            <br/>
            <h3>MobileNavigation</h3>
            <br/>
            <MobileNavigation
              list={list}
              activeSlug={list[0].slug}
            />;
            <br/>
            <br/>
          </div>
          {/* MobileProducts */}
          <div style={{'padding': '20px','minHeight': '100px','transform': 'translate3d(0, 0, 0)',background: 'red'}}>
            <br/>
            <h3>MobileProducts</h3>
            <br/>
            <MobileProducts
              list={mobileProductsList}
              favorites={mobileProductsFavoritesList}
              activeSlug={mobileProductsList[0].slug}
            />;
            <br/>
            <br/>
          </div>
          {/* Modal */}          
          <div style={{'padding': '20px','minHeight': '400px','transform': 'translate3d(0, 0, 0)',background: 'red'}}>
            <br/>
            <h3>Modal</h3>
            <br/>
            <Modal closeOnClickOutside={false} background="dark-background" position="bottom" visible>bottom modal</Modal>
            <br/>
            <br/>
          </div>
          {/* Notification 
            heading prop required for description????
          */}          
          <div>
            <br/>
            <h3>Notification</h3>
            <br/>
            <Notification
              closable={false}
              title="title"
              notificationIcon='bc-icon-success-fill'
              description="Not closing click"
              heading="closing"
            />
            <br/>
            <br/>
          </div>
          {/* Overlay */}          
          <div style={{'padding': '20px','minHeight': '500px','transform': 'translate3d(0, 0, 0)',background: 'red'}}>
            <br/>
            <h3>Overlay</h3>
            <br/>
            <Overlay
              headerActions={headerActions}
              footer={footer}
              position={positions[2]}
              title={'Title'}
              description={'Small Title'}
              horizontalSize={horizontalSizes[0]}
              closeText={'Close Text'}
              reduceText={'Reduce Text'}
              extendText={'Extend Text'}
            >
              <span role="img" aria-label="sheep">🇨🇴🇳🇹🇪🇳🇹</span>
            </Overlay>
            <br/>
            <br/>
          </div>
          {/* Pagination */}          
          <div>
            <br/>
            <h3>Pagination</h3>
            <br/>
            <Pagination selected={5} count={40}/>
            <br/>
            <br/>
          </div>
          {/* Profile */}          
          <div style={{'padding': '20px','minHeight': '50px','transform': 'translate3d(0, 0, 0)',background: 'red'}}>
            <br/>
            <h3>Profile</h3>
            <br/>
            <Profile
              tooltipProps={{ text: 'Username' }}
              menuProps={{data: [
                {
                  title: 'Menu 1',
                  children: [
                    {
                      title: 'Menu 1-1',
                    },
                  ],
                },
                {
                  title: 'Menu 2',
                  children: [
                    {
                      title: 'Menu 2-1',
                      children: [
                        {
                          title: 'Menu 2-1-1',
                          children: [
                            {
                              title: 'Menu 2-1-1-1'
                            }
                          ],
                        }
                      ],
                    },
                    {
                      title: 'Menu 2-2',
                    },
                  ],
                },
                {
                  divider: {hasFullWidth:true},
                },
                {
                  title: 'Log Out',
                  className: 'color-danger',
                },
              ]}}
              showIcon={true}
              avatarProps={{
                icon: 'bc-icon-user',
              }}
              username={'username@username.com'}
              tooltipText={'Some tooltip text'}
              tooltipTitle={'Some title'}
            />
            <br/>
            <br/>
          </div>
          {/* Progress */}          
          <div>
            <br/>
            <h3>Progress</h3>
            <br/>
            <Progress
              appearance="linear"
              percentage={67}
              size="medium"
              loaderStatuses={['completed', 'failed']}
            />
            <br/>
            <br/>
          </div>
          {/* RadioGroup */}          
          <div>
            <br/>
            <h3>RadioGroup</h3>
            <br/>
            <RadioGroup
              name="controlled"
              options={options}
              value={2}
            />
            <br/>
            <br/>
          </div>
          {/* Range */}          
          <div>
            <br/>
            <h3>Range</h3>
            <br/>
            <Range
              min={0}
              max={100}
              step={1}
              defaultValue={[5]}
              circleTypes={['c-type-1', 'c-type-2']}
              showCircleOnDrag
            />
            <br/>
            <br/>
          </div>
          {/* Search */}          
          <div>
            <br/>
            <h3>Search</h3>
            <br/>
            <Search canClear={false} />
            <br/>
            <br/>
          </div>
          {/* Section */}          
          <div  style={{'padding': '20px','minHeight': '50px','transform': 'translate3d(0, 0, 0)',background: 'red'}}>
            <br/>
            <h3>Section</h3>
            <br/>
            <Section
              text="Paper Title"
              color="base"
              icon="bc-icon-players"
              actions={
                <Button size="medium" appearance="minimal">Edit</Button>
              }
            >
              {[0,0,0,0].map((item, index) => (
                <React.Fragment key={index}>
                  <Title text="Section with line" withLine />
                  <div className="section-sub-group" style={{background: '#f2f2f2', padding: 60}}>
                    Content goes here.
                    <br /><br />
                    p.s delete inline styles after creating an atom, this is just for u.
                  </div>
                </React.Fragment>
              ))}
            </Section>
            <br/>
            <br/>
          </div>
          {/* Slider */}          
          <div>
            <br/>
            <h3>Slider</h3>
            <br/>
            <Slider
              min={0}
              max={100}
              step={1}
              defaultValue={5}
              circleTypes={['c-type-1', 'c-type-2']}
              showCircleOnDrag
              withInput
            />
            <br/>
            <br/>
          </div>
          {/* Status */}          
          <div>
            <br/>
            <h3>Status</h3>
            <br/>
            <Status title="Stable" tooltipText="Stable" />
            <br/>
            <br/>
          </div>
          {/* Steps */}          
          <div>
            <br/>
            <h3>Steps</h3>
            <br/>
            <Steps
              direction="vertical"
              size="big"
            >
              <Step
                key="1"
                title="Step 1"
              />
              <Step
                key="2"
                title="Step 2"
              />
              <Step
                key="3"
                title="Step 3"
              />
            </Steps>
            <br/>
            <br/>
          </div>
          {/* Tabs */}          
          <div>
            <br/>
            <h3>Tabs</h3>
            <br/>
            <Tabs
              type="box"
              position="left"
            >
              <Tab title="First">First content</Tab>
              <Tab title="Second">Second content</Tab>
            </Tabs>
            <br/>
            <br/>
          </div>
          {/* Timeline */}          
          <div>
            <br/>
            <h3>Timeline</h3>
            <br/>
            <Timeline>
              <TimelineItem
                isLoading
                title="First step"
                description="some description to first"
                appearance="compact"
              />
              <TimelineItem
                isLoading
                title="Second step"
                description="some description to second"
                appearance="compact"
              />
            </Timeline>
            <br/>
            <br/>
          </div>
          {/* Tag */}
          <div>
            <br/>
            <h3>Tag</h3>
            <br/>
            <Tag name="miminal" type="minimalistic" />
            <br/>
            <br/>
          </div>
          {/* Tooltip */}
          <div>
            <br/>
            <h3>Tooltip</h3>
            <br/>
            <Tooltip
              size={sizes[0]}
              position={'auto'}
              alwaysShow={false}
              title={'Title'}
              text={'Tooltip some text'}            
            >
              <Button>
                Button with tooltip
              </Button>
            </Tooltip>
            <br/>
            <br/>
          </div>
          {/* ValidatableNumberInput */}
          <div>
            <br/>
            <h3>ValidatableNumberInput</h3>
            <br/>
            <ValidatableNumberInput
              required
              min={11}
              max={1000000}
              placeholder="Placeholder for number"
            />
            <br/>
            <br/>
          </div>
          {/* Widget */}
          <div>
            <br/>
            <h3>Widget</h3>
            <br/>
            <Widget
              img="https://www.betconstruct.com/assets/images/casino/jackpot-money.svg"
              title="Total of Deposits"
              text="USD 12.770.00"
              color="#f3ce12"
            />
            <br/>
            <br/>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <h2>=========ORGANISMS=========</h2>
        <div>
          {/* CheckboxGroup */}
          <div>
            <br/>
            <h3>CheckboxGroup</h3>
            <br/>
            <CheckboxGroup
              showSelectAll
              checkAllText="Check all"
              data={[
                {
                  label: 'Option 1',
                  value: 1,
                },
                {
                  label: 'Option 2',
                  value: 2,
                },
                {
                  label: 'Option 3',
                  value: 3,
                  disabled: true,
                },
              ]}
            />
            <br/>
            <br/>
          </div>
          {/* Dropdown */}
          <div>
            <br/>
            <h3>Dropdown</h3>
            <br/>
            <Dropdown
              isMultiSelect={false}
              required={false}
              screenType={screenTypes[0]}
              disabled={false}
              hasSearch={true}
              label={'Label'}
              labelAppearance={inputConfig.labelAppearance[0]}
              description={'Main'}
              inputSize={inputConfig.size[1]}
              defaultOpened={false}
              closeAfterSelect={true}
              flexibility={'full-width'}
              placeholder={'Dropdown title'}
              appearance={inputConfig.appearance[0]}
              data={dropDownData}
              multiSelectCount={5}
              multiSelectWrappedText={'options selected'}
              searchPlaceholderText={'Search'}
              checkAllText={'Check all'}
              unCheckAllText={'Uncheck all'}
              noDataText={'No data found'}
              noDataTypes={'data'}
              noDataWithImage={true}
              readOnly={false}
              cornerRadius={inputConfig.cornerRadius[0]}
            />
            <br/>
            <br/>
          </div>
          {/* Editor */}
          <div>
            <br/>
            <h3>Editor</h3>
            <br/>
            <Editor toolbarConfig={{
              image: {
                uploadCallback: file => {
                  const imageObject = {
                    localSrc: URL.createObjectURL(file),
                    file,
                  }
                  return new Promise(resolve => {
                    resolve({ data: { link: imageObject.localSrc } });
                  });
                }
              }
            }}
            />
            <br/>
            <br/>
          </div>
          {/* Form */}
          <div>
            <br/>
            <h3>Form</h3>
            <br/>
            <Form>
              <ValidatableDatePicker
                required
                label="Birthday"
                cornerRadius="smooth-radius"
                appearance="minimal"
              />
            </Form>
            <br/>
            <br/>
          </div>
          {/* Overspread */}
          {/* <div style={{'padding': '20px','minHeight': '500px','transform': 'translate3d(0, 0, 0)',background: 'red'}}>
            <br/>
            <h3>Overspread</h3>
            <br/>
            <Overspread
              hasOptions
              opened={true}
              title={'Title'}
              doneWithIcon={false}
              hasDone={true}
              doneText={'Done'}
              hasBack={false}
              backWithIcon={false}
              backText={'Back'}
              hasSearch={true}
              hasOptions={false}
              dataForOptions={optionData}
              titleHasOptions={false}
              defaultValueForTitleWithOptions={dataForTitleWithOptions[0]}
              dataForTitleWithOptions={dataForTitleWithOptions}
            >
              Your content goes here...
            </Overspread>
            <br/>
            <br/>
          </div> */}
          {/* SearchWithDropdown */}
          <div>
            <br/>
            <h3>SearchWithDropdown</h3>
            <br/>
            <SearchWithDropdown
              dropdownProps={{
                data: [
                  {label: 'Option 1', value: 1},
                  {label: 'Option 2', value: 2},
                  {label: 'Option 3', value: 3},
                ],
                checkAllText: 'All', 
                isMultiSelect: true,
              }}
            />
            <br/>
            <br/>
          </div>
          {/* Toaster */}
          <div>
            <br/>
            <h3>Toaster</h3>
            <br/>
            <Toaster toasterPosition="center" />
            <br/>
            <br/>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;

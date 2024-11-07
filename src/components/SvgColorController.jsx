import { useState } from 'react';
import AtIcon from './icon/existing/at';
import BarsIcon from './icon/existing/bars';
import BellIcon from './icon/existing/bell';
import BubbleIcon from './icon/existing/bubble';
import CloseIcon from './icon/existing/close';
import CogIcon from './icon/existing/cog';
import CoursesIcon from './icon/existing/courses';
import DashboardIcon from './icon/existing/dashboard';
import DataIcon from './icon/existing/data';
import DotsIcon from './icon/existing/dots';
import DownIcon from './icon/existing/down';
import DownloadIcon from './icon/existing/download';
import EditIcon from './icon/existing/edit';
import EmojiIcon from './icon/existing/emoji';
import FilterIcon from './icon/existing/filter';
import GlobeIcon from './icon/existing/globe';
import HexagonIcon from './icon/existing/hexagon';
import InfoIcon from './icon/existing/info';
import LeftIcon from './icon/existing/left';
import LinkIcon from './icon/existing/link';
import LogoutIcon from './icon/existing/logout';
import ManageIcon from './icon/existing/manage';
import PaperclipIcon from './icon/existing/paperclip';
import PeopleIcon from './icon/existing/people';
import ReplyIcon from './icon/existing/reply';
import RightIcon from './icon/existing/right';
import SearchIcon from './icon/existing/search';
import SendIcon from './icon/existing/send';
import SortIcon from './icon/existing/sort';
import TrashIcon from './icon/existing/trash';
import UpIcon from './icon/existing/up';
import UserIcon from './icon/existing/user';

import AIIcon from './icon/new/ai';
import ReturnIcon from './icon/new/return';
import AnnotateIcon from './icon/new/annotate';
import BellSolid from './icon/new/bellSolid';
import ThumbsUpSolid from './icon/new/thumbUpSolid';
import ThumbsUpOutline from './icon/new/thumbUpOutline';

import IconWrapper from './IconWrapper';

const SvgColorController = () => {
  const [color, setColor] = useState('#000000');
  const [activeTab, setActiveTab] = useState('default');

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const presetColors = [
    '#ff0000', // red
    '#00ff00', // green
    '#0000ff', // blue
    '#ffff00', // yellow
    '#ff00ff', // magenta
    '#00ffff', // cyan
  ];

  const DefaultIconSet = () => (
    <>
      <div className="grid grid-cols-8 gap-4">
        <IconWrapper iconName="at">
          <AtIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="bars">
          <BarsIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="bell">
          <BellIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="bubble">
          <BubbleIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="close">
          <CloseIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="cog">
          <CogIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="courses">
          <CoursesIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="dashboard">
          <DashboardIcon stroke={color} />
        </IconWrapper>
      </div>

      <div className="grid grid-cols-8 gap-4">
        <IconWrapper iconName="data">
          <DataIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="dots">
          <DotsIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="down">
          <DownIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="download">
          <DownloadIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="edit">
          <EditIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="emoji">
          <EmojiIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="filter">
          <FilterIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="Globe">
          <GlobeIcon stroke={color} />
        </IconWrapper>
      </div>

      <div className="grid grid-cols-8 gap-4">
        <IconWrapper iconName="hexagon">
          <HexagonIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="info">
          <InfoIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="left">
          <LeftIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="link">
          <LinkIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="logout">
          <LogoutIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="manage">
          <ManageIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="paperclip">
          <PaperclipIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="people">
          <PeopleIcon stroke={color} />
        </IconWrapper>
      </div>

      <div className="grid grid-cols-8 gap-4">
        <IconWrapper iconName="reply">
          <ReplyIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="right">
          <RightIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="search">
          <SearchIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="send">
          <SendIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="sort">
          <SortIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="trash">
          <TrashIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="up">
          <UpIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="user">
          <UserIcon stroke={color} />
        </IconWrapper>
      </div>
    </>
  );

  // Placeholder for the new icon set
  const NewIconSet = () => (
    <div className="grid grid-cols-8 gap-4">
        <IconWrapper iconName="AI">
          <AIIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="Return">
          <ReturnIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="Annotate">
          <AnnotateIcon stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="Bell Solid">
          <BellSolid stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="Thumbs Up Solid">
          <ThumbsUpSolid stroke={color} />
        </IconWrapper>
        <IconWrapper iconName="Thumbs Up Outline">
          <ThumbsUpOutline stroke={color} />
        </IconWrapper>
      </div>
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="colorPicker" className="block text-sm font-medium text-gray-700">
            Select Color
          </label>
          <input
            type="color"
            id="colorPicker"
            value={color}
            onChange={handleColorChange}
            className="h-10 w-20"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Preset Colors
          </label>
          <div className="flex gap-2">
            {presetColors.map((presetColor) => (
              <button
                key={presetColor}
                onClick={() => setColor(presetColor)}
                className="w-8 h-8 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                style={{ backgroundColor: presetColor }}
                aria-label={`Select color ${presetColor}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('default')}
            className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
              activeTab === 'default'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            New Icon Set
          </button>
          <button
            onClick={() => setActiveTab('new')}
            className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
              activeTab === 'new'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Existing Icons (updated)
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === 'default' ? <DefaultIconSet /> : <NewIconSet />}
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm font-mono">Current color: {color}</p>
      </div>
    </div>
  );
};

export default SvgColorController;
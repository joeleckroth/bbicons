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
  const [activeColorClass, setActiveColorClass] = useState('icon-primary');
  const [activeTab, setActiveTab] = useState('default');

  const colorClasses = [
    { name: 'Primary', class: 'icon-primary', color: 'var(--icon-primary)' },
    { name: 'Secondary', class: 'icon-secondary', color: 'var(--icon-secondary)' },
    { name: 'Accent', class: 'icon-accent', color: 'var(--icon-accent)' },
    { name: 'Success', class: 'icon-success', color: 'var(--icon-success)' },
    { name: 'Warning', class: 'icon-warning', color: 'var(--icon-warning)' },
    { name: 'Danger', class: 'icon-danger', color: 'var(--icon-danger)' },
    { name: 'Muted', class: 'icon-muted', color: 'var(--icon-muted)' },
  ];

  const DefaultIconSet = () => (
    <>
      <div className="grid grid-cols-8 gap-4">
        <IconWrapper iconName="at">
          <AtIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="bars">
          <BarsIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="bell">
          <BellIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="bubble">
          <BubbleIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="close">
          <CloseIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="cog">
          <CogIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="courses">
          <CoursesIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="dashboard">
          <DashboardIcon className={activeColorClass} />
        </IconWrapper>
      </div>

      <div className="grid grid-cols-8 gap-4">
        <IconWrapper iconName="data">
          <DataIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="dots">
          <DotsIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="down">
          <DownIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="download">
          <DownloadIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="edit">
          <EditIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="emoji">
          <EmojiIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="filter">
          <FilterIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="Globe">
          <GlobeIcon className={activeColorClass} />
        </IconWrapper>
      </div>

      <div className="grid grid-cols-8 gap-4">
        <IconWrapper iconName="hexagon">
          <HexagonIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="info">
          <InfoIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="left">
          <LeftIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="link">
          <LinkIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="logout">
          <LogoutIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="manage">
          <ManageIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="paperclip">
          <PaperclipIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="people">
          <PeopleIcon className={activeColorClass} />
        </IconWrapper>
      </div>

      <div className="grid grid-cols-8 gap-4">
        <IconWrapper iconName="reply">
          <ReplyIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="right">
          <RightIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="search">
          <SearchIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="send">
          <SendIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="sort">
          <SortIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="trash">
          <TrashIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="up">
          <UpIcon className={activeColorClass} />
        </IconWrapper>
        <IconWrapper iconName="user">
          <UserIcon className={activeColorClass} />
        </IconWrapper>
      </div>
    </>
  );

  const NewIconSet = () => (
    <div className="grid grid-cols-8 gap-4">
      <IconWrapper iconName="AI">
        <AIIcon className={activeColorClass} />
      </IconWrapper>
      <IconWrapper iconName="Return">
        <ReturnIcon className={activeColorClass} />
      </IconWrapper>
      <IconWrapper iconName="Annotate">
        <AnnotateIcon className={activeColorClass} />
      </IconWrapper>
      <IconWrapper iconName="Bell Solid">
        <BellSolid className={activeColorClass} />
      </IconWrapper>
      <IconWrapper iconName="Thumbs Up Solid">
        <ThumbsUpSolid className={activeColorClass} />
      </IconWrapper>
      <IconWrapper iconName="Thumbs Up Outline">
        <ThumbsUpOutline className={activeColorClass} />
      </IconWrapper>
    </div>
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Icon Style
          </label>
          <div className="grid grid-cols-4 gap-2">
            {colorClasses.map((colorOption) => (
              <button
                key={colorOption.class}
                onClick={() => setActiveColorClass(colorOption.class)}
                className={`p-3 rounded-lg border transition-all ${
                  activeColorClass === colorOption.class
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: colorOption.color }}
                  />
                  <span className="text-sm">{colorOption.name}</span>
                </div>
                <div className="mt-2 text-xs font-mono text-gray-500">
                  {colorOption.class}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

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
            Default Icons
          </button>
          <button
            onClick={() => setActiveTab('new')}
            className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
              activeTab === 'new'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            New Icons
          </button>
        </nav>
      </div>

      <div className="mt-4">
        {activeTab === 'default' ? <DefaultIconSet /> : <NewIconSet />}
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm font-mono">Current class: {activeColorClass}</p>
        <p className="text-sm text-gray-500 mt-1">
          Color value: {colorClasses.find(c => c.class === activeColorClass)?.color}
        </p>
      </div>
    </div>
  );
};

export default SvgColorController;
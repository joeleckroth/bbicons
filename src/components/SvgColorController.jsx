import { useState } from 'react';
// Existing Icons
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
import CourseIcon from './icon/existing/course';


// New Icons
import AIIcon from './icon/new/ai';
import ReturnIcon from './icon/new/return';
import AnnotateIcon from './icon/new/annotate';
import BellSolid from './icon/new/bellSolid';
import ThumbsUpSolid from './icon/new/thumbUpSolid';
import ThumbsUpOutline from './icon/new/thumbUpOutline';
import StopIcon from './icon/new/stop';

import IconWrapper from './IconWrapper';

const SvgColorController = () => {
  const [activeColorClass, setActiveColorClass] = useState('color-primary');
  const [activeTab, setActiveTab] = useState('default');

  const colorClasses = [
    { name: 'Primary', class: 'color-primary', color: 'var(--color-primary)' },
    { name: 'Secondary', class: 'color-secondary', color: 'var(--color-secondary)' },
    { name: 'Accent', class: 'color-accent', color: 'var(--color-accent)' },
    { name: 'Success', class: 'color-success', color: 'var(--color-success)' },
    { name: 'Warning', class: 'color-warning', color: 'var(--color-warning)' },
    { name: 'Danger', class: 'color-danger', color: 'var(--color-danger)' },
    { name: 'Muted', class: 'color-muted', color: 'var(--color-muted)' },
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

      <div className="grid grid-cols-8 gap-4">
        <IconWrapper iconName="Course">
          <CourseIcon className={activeColorClass} />
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
      <IconWrapper iconName="Stop">
          <StopIcon className={activeColorClass} />
        </IconWrapper>
    </div>
  );

  const ButtonExamples = () => (
    <div className="space-y-8">
      {/* Primary Buttons */}
      <section>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Primary Actions</h3>
        <div className="flex flex-wrap gap-4">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all group">
            <BellIcon className={`w-4 h-4 ${activeColorClass}`} />
            <span>Create New</span>
          </button>

          <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all group">
            <span>Send Message</span>
            <SendIcon className={`w-4 h-4 ${activeColorClass} group-hover:translate-x-1 transition-transform`} />
          </button>

          <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all group">
            <DownloadIcon className={`w-4 h-4 ${activeColorClass} group-hover:translate-y-1 transition-transform`} />
            <span>Download</span>
          </button>

          <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all group">
            <span>Share Document</span>
            <LinkIcon className={`w-4 h-4 ${activeColorClass} group-hover:rotate-45 transition-transform`} />
          </button>
        </div>
      </section>

      {/* Secondary Buttons */}
      <section>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Secondary Actions</h3>
        <div className="flex flex-wrap gap-4">
          <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all group">
            <EditIcon className={`w-4 h-4 ${activeColorClass}`} />
            <span>Edit Item</span>
          </button>

          <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-red-500 hover:text-red-600 transition-all group">
            <TrashIcon className={`w-4 h-4 ${activeColorClass} group-hover:rotate-12 transition-transform`} />
            <span>Delete</span>
          </button>

          <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-green-500 hover:text-green-600 transition-all group">
            <FilterIcon className={`w-4 h-4 ${activeColorClass}`} />
            <span>Filter Results</span>
          </button>

          <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-purple-500 hover:text-purple-600 transition-all group">
            <SortIcon className={`w-4 h-4 ${activeColorClass} group-hover:-rotate-180 transition-transform duration-300`} />
            <span>Sort Data</span>
          </button>
        </div>
      </section>

      {/* Icon-Only Buttons */}
      <section>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Icon-Only Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-all group">
            <SearchIcon className={`w-5 h-5 ${activeColorClass}`} />
          </button>

          <button className="p-2 rounded-full hover:bg-gray-100 transition-all group">
            <BellIcon className={`w-5 h-5 ${activeColorClass} group-hover:animate-bounce`} />
          </button>

          <button className="p-2 rounded-full hover:bg-gray-100 transition-all group">
            <CogIcon className={`w-5 h-5 ${activeColorClass} group-hover:rotate-90 transition-transform duration-300`} />
          </button>

          <button className="p-2 rounded-full hover:bg-gray-100 transition-all group">
            <DotsIcon className={`w-5 h-5 ${activeColorClass} group-hover:scale-125 transition-transform`} />
          </button>
        </div>
      </section>

      {/* Link-Style Buttons */}
      <section>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Link-Style Buttons</h3>
        <div className="flex flex-wrap gap-6">
          <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 group">
            <span>View Details</span>
            <RightIcon className={`w-4 h-4 ${activeColorClass} group-hover:translate-x-1 transition-transform`} />
          </button>

          <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 group">
            <LeftIcon className={`w-4 h-4 ${activeColorClass} group-hover:-translate-x-1 transition-transform`} />
            <span>Go Back</span>
          </button>

          <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 group">
            <span className="relative">
              Learn More
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all" />
            </span>
            <RightIcon className={`w-4 h-4 ${activeColorClass}`} />
          </button>

          <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 group">
            <InfoIcon className={`w-4 h-4 ${activeColorClass} group-hover:scale-110 transition-transform`} />
            <span>More Info</span>
          </button>
        </div>
      </section>

      {/* Toast-Style Notifications */}
      <section>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Toast-Style Notifications</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-lg">
            <ThumbsUpSolid className={`w-4 h-4 ${activeColorClass}`} />
            <span>Success Message</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-800 rounded-lg">
          <CloseIcon className={`w-4 h-4 ${activeColorClass}`} />
            <span>Error Message</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg">
            <InfoIcon className={`w-4 h-4 ${activeColorClass}`} />
            <span>Warning Message</span>
          </div>
        </div>
      </section>
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
            Existing Icons
          </button>
          <button
            onClick={() => setActiveTab('new')}
            className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${
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
        {activeTab === 'default' ? <DefaultIconSet /> : 
         activeTab === 'new' ? <NewIconSet /> : 
         <ButtonExamples />}
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
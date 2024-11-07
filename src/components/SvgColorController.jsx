import { useState } from 'react';
import AtIcon from './icon/at';
import BarsIcon from './icon/bars';
import BellIcon from './icon/bell';
import BubbleIcon from './icon/bubble';
import CloseIcon from './icon/close';
import CogIcon from './icon/cog';
import CoursesIcon from './icon/courses';
import DashboardIcon from './icon/dashboard';
import DataIcon from './icon/data';
import DotsIcon from './icon/dots';
import DownIcon from './icon/down';
import DownloadIcon from './icon/download';
import EditIcon from './icon/edit';
import EmojiIcon from './icon/emoji';

import FilterIcon from './icon/filter';
import GlobeIcon from './icon/globe';
import HexagonIcon from './icon/hexagon';
import InfoIcon from './icon/info';
import LeftIcon from './icon/left';
import LinkIcon from './icon/link';
import LogoutIcon from './icon/logout';
import ManageIcon from './icon/manage';
import PaperclipIcon from './icon/paperclip';
import PeopleIcon from './icon/people';
import ReplyIcon from './icon/reply';
import RightIcon from './icon/right';
import SearchIcon from './icon/search';
import SendIcon from './icon/send';
import SortIcon from './icon/sort';
import TrashIcon from './icon/trash';
import UpIcon from './icon/up';
import UserIcon from './icon/user';

import IconWrapper from './IconWrapper';

const SvgColorController = () => {
  const [color, setColor] = useState('#000000');

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

      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm font-mono">Current color: {color}</p>
      </div>
    </div>
  );
};

export default SvgColorController;
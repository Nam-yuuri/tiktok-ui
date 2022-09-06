import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'language1',
                        data: [
                            {
                                code: 'en',
                                title: 'English 1',
                            },
                            {
                                code: 'vi',
                                title: 'Tiếng Việt 1',
                                children: {
                                    title: 'language2',
                                    data: [
                                        {
                                            code: 'en',
                                            title: 'English 2',
                                        },
                                        {
                                            code: 'vi',
                                            title: 'Tiếng Việt 2',
                                        },
                                        {
                                            code: 'vi',
                                            title: 'Tiếng Việt 2',
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/Settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img className={cx('img-logo')} src={images.logo} alt="TikTok" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn', 'action-btn_upload')}>
                                    <UploadIcon className={cx('upload-icon')} />
                                    <span>Upload</span>
                                </button>
                            </Tippy>
                            <Tippy content="Messages">
                                <button className={cx('action-btn', 'action-btn_message')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className={cx('action-btn', 'action-btn_inbox')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f89b316574f8f0ab300e20d4b7ff6a29~c5_100x100.jpeg?x-expires=1662519600&x-signature=VcNHI3x8nEh1Yp%2BmtOm1PlvDMlg%3D"
                                alt="nguyen van a"
                                // fallback="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7137581727107448838~c5_720x720.jpeg?x-expires=1662019200&x-signature=xZUpah6vVNUB%2Fi%2FN2eukpzOiL7Q%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

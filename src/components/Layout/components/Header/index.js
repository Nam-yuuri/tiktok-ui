import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMessage,
    faSign,
    faSignIn,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Accountitem from '~/components/Accountitem';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';

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
                    // children: {
                    //     title: 'language',
                    //     data: [
                    //         {
                    //             code: 'en',
                    //             title: 'English 1',
                    //         },
                    //         {
                    //             code: 'vi',
                    //             title: 'Tiếng Việt 1',
                    //             children: {
                    //                 title: 'language',
                    //                 data: [
                    //                     {
                    //                         code: 'en',
                    //                         title: 'English 2',
                    //                     },
                    //                     {
                    //                         code: 'vi',
                    //                         title: 'Tiếng Việt 2',
                    //                     },
                    //                     {
                    //                         code: 'vi',
                    //                         title: 'Tiếng Việt 2',
                    //                     },
                    //                 ],
                    //             },
                    //         },
                    //     ],
                    // },
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
    const [searchResult, setsearchResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setsearchResult([]);
        }, 0);
    }, []);

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
                <img className={cx('img-logo')} src={images.logo} alt="TikTok" />
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <Accountitem />
                                <Accountitem />
                                <Accountitem />
                                <Accountitem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search acount and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <SearchIcon className={cx()} />
                        </button>
                    </div>
                </HeadlessTippy>

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
                                src="http:0068-aiso/e439be2f7c79e09e67aa148c5509a61b~c5_100x100.jpeg?x-expires=1661997600&x-signature=Ig%2BQc5nrfC8yboeYpJRZZ%2BB%2F%2Fg8%3D"
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

import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f89b316574f8f0ab300e20d4b7ff6a29~c5_100x100.jpeg?x-expires=1662519600&x-signature=VcNHI3x8nEh1Yp%2BmtOm1PlvDMlg%3D"
                alt=""
            />
            <div className={cx('item-info')}>
                <h4 className={cx('nickname')}>
                    <strong>friend. hanassii</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('name')}>Peach Le Phuong Hoa</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;

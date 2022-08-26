import classNames from 'classnames/bind'
import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss'
import Sidbar from './Sidebar';

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidbar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

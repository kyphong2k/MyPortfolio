import styles from './PreLoader.scss';

export default function PreLoader() {
  return (
    <div className='preloader-container preloader-wave-spread'>
      <div className='preloader'>
        <div className='preloader-line-1'></div>
        <div className='preloader-line-2'></div>
        <div className='preloader-line-3'></div>
        <div className='preloader-line-4'></div>
        <div className='preloader-line-5'></div>
      </div>
    </div>
  );
}

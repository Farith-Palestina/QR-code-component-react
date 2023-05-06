import QRImage from '../assets/image-qr-code.png';

function Lobby(){
    return(
        <div className='container'>
            <div className='image-container'>
                <img alt='QRImage' src={QRImage}/>
            </div>
            <div className='text-container'>
                <div className='first-text'>
                    <p>Improve your front-end skills by building projects</p>
                </div>
                <div className='last-text'>
                    <p>Scan the QR code to visit Frontend Mentor and take vour coding skills to the next level</p>
                </div>
            </div>
        </div>
    );
}

export default Lobby;
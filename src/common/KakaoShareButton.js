

function KakaoShareButton(){
    return(
        <div className="Kakao-icon-container">
            <img className="Kakao-icon" src={`${process.env.PUBLIC_URL}/img/kakao.png`} alt="kakao"></img>
        </div>
    )
}

export default KakaoShareButton;
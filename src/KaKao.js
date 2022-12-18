import React, { useEffect } from 'react'

const KakaoShareButton = () => {
  useEffect(() => {
    createKakaoButton()
  }, [])
  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_KAKAO_SHARE_KEY)
      }
      kakao.Share.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: 'Christmas-MBTI',
          description: '🎅 나는 어떤 크리스마스 친구일까요? 🎄 🏃 지금 바로 확인하러 가기! 🏃‍♀️',
          imageUrl: 'http://k.kakaocdn.net/dn/56nyQ/btrTQv7YVdd/O1siS7T6dy4PpKSJL4NbU1/kakaolink40_original.png', // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: "http://christmas-mbti.com",
            webUrl: "http://christmas-mbti.com",
          },
        },
        social: {
          likeCount: 39,
          commentCount: 15,
          sharedCount: 795,
        },
        buttons: [
          {
            title: '테스트 하러가기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      })
    }
  }
  return (
    <div className="kakao-share-button">
      {/* Kakao share button */}
      <button id="kakao-link-btn">
      <img src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
    alt="카카오톡 공유 보내기 버튼" />
        <div className='Share-text'>카카오톡 공유하기</div>      
        </button>
    </div>
  )
}
export default KakaoShareButton
// <![CDATA[
// // 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init('a74465d4df13f48e49b9f5454b12eb80');
// // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
Kakao.Link.createDefaultButton({
    container: '#kakao-link-btn',
    objectType: 'feed',
    content: {
        title: '2분 성격 테스트',
        description: '2분이면 테스트 끝!',
        imageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
            mobileWebUrl: 'http://con.esls.io/Users/Mark/4th/',
            webUrl: 'http://con.esls.io/Users/Mark/4th/'
        }
    },
    social: {
        likeCount: 0,
        commentCount: 0,
        sharedCount: 0
    },
    buttons: [{
            title: '웹으로 보기',
            link: {
                mobileWebUrl: 'http://con.esls.io/Users/Mark/4th/',
                webUrl: 'http://con.esls.io/Users/Mark/4th/'
            }
        },
        {
            title: '앱으로 보기',
            link: {
                mobileWebUrl: 'http://con.esls.io/Users/Mark/4th/',
                webUrl: 'http://con.esls.io/Users/Mark/4th/'
            }
        }
    ]
});
// ]]>

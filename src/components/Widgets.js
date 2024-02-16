import React from 'react'


function Widgets() {
  return (
    <>
    
    <div className='widgets'>

        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhomeinsteadgb%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="340"
              height="100%"
              style={{ border: "none", overflow:"hidden"}}
              title='homeinstead facebook page'
              allowTransparency="true"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        >
           </iframe>

        {/* <div class="fb-page" data-href="https://www.facebook.com/homeinsteadgb" data-tabs="timeline" data-width="340" data-height="100%" 
          data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" 
          data-show-facepile="true"><blockquote cite="https://www.facebook.com/homeinsteadgb" class="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/homeinsteadgb">Home Instead - Greenwich &amp; Bexley</a></blockquote></div> */}
    </div>
    </>
  )
}

export default Widgets
{let t=function(t,e){new Noty({theme:"relax",text:e,type:t,layout:"topRight",timeout:1500}).show()},e=function(){$.each($(" .delete-post-button"),(t,e)=>{s(e)})},n=function(){let e=$("#new-post-form");e.submit((function(n){n.preventDefault(),$.ajax({type:"post",url:"/posts/create",data:e.serialize(),success:function(e){let n=o(e.data);console.log("Data in home post: ",e),$("#posts-list-container").prepend(n),s($(" .delete-post-button",n)),createComment($(" .new-comment-form",n)),CommonLikeFunctions.LikeEventSetter($(" .like-button-form",n)),t("success","Successfully Posted!!")},error:function(e){t("error","Error in posting status!!"),console.log(e.responseText)}})}))},o=function(t){return $(`<li class="post-card" id="post-${t.post._id}">\n                    <div class="user-card">\n                        <img class="profile-pic-micro" src="https://www.flaticon.com/svg/static/icons/svg/3011/3011270.svg">\n                        <p>\n                            <a href="/users/profile/${t.user_id}">${t.username}</a>\n                        </p>\n                        <div class="options-container">\n                          <div class="more-container">\n                              <a class="delete-post-button" href="/posts/destroy/${t.post._id}">Delete</a>\n                          </div>\n                          <div class="more-container">\n                              <img src="https://www.flaticon.com/svg/static/icons/svg/1828/1828687.svg">\n                          </div>\n                      </div>\n                    </div>\n                    <div class="post-content-container">\n                    ${t.post.content}\n                    </div>\n                    <form class="like-button-form" action="/likes/toggle/?id=${t.post._id}&type=Post" method="POST">\n                    <span class="like-view" id="like-${t.post._id}">${t.post.likes.length} people liked this post</span>\n                    &nbsp;\n                    <button type="submit"><i class="far fa-thumbs-up"></i></button>\n                    </form>\n                    <br>\n                    <div id="post-comments">\n                            <div class="post-comments-list">\n                                    <ul id ="post-comments-${t.post._id}">\n                                    </ul>\n                                </div>\n                            <form action="/comments/create" class="new-comment-form" method="POST">\n                                <input type="text" name="content" placeholder="Write comment..." required></textarea>\n                                <input type="hidden" name="post" value="${t.post._id}">\n                                <input type="submit" value = "Add Comment" >\n                            </form>\n                        \n                    </div>\n                    \n                </li>`)},s=function(e){$(e).click((function(n){n.preventDefault(),$.ajax({type:"get",url:$(e).prop("href"),success:function(e){$("#post-"+e.data.post_id).remove(),t("success","Post deleted!!")},error:function(e){t("error","Error in deleting Post!!"),console.log("Error:",err.responseText)}})}))};n(),e()}
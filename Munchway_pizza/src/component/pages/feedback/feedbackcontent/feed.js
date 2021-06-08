import React from 'react';
import './feed.css';

class Feed extends React.Component{
  render(){
    return(
      <div className="container-fluid mt-5">
           <div className="d-flex justify-content-center row">
              <div className="col-md-8">
                  <div className="d-flex flex-column comment-section">
                      <div className="bg-white p-2">
                          <div className="d-flex flex-row user-info">
                          <img className="rounded-circle" src="image/33.jpeg">
                          </img>
                              <div className="d-flex flex-column justify-content-start ml-2">
                              <span className="d-block font-weight-bold name">Munchway Pizza</span>
                              </div>
                          </div>
                          <div className="mt-2">
                              <p className="comment-text">!One of the best pizzas I have ever ate</p>
                          </div>
                      </div>
                    <div className="bg-white">
                        <div className="d-flex flex-row fs-12">
                            <div className="like p-2 cursor">
                            <button type="button" class="btn btn-warning mr-sm-2" onClick={() => this.filterData()}> אהבתי <i class="fa fa-thumbs-o-up"></i> </button>
                            </div>
                            <div className="like p-2 cursor">
                            <button type="button" class="btn btn-warning mr-sm-2" onClick={() => this.filterData()}> תגובה <i class="fa fa-commenting-o"></i> </button>
                            </div>
                            <div className="like p-2 cursor">
                            <button type="button" class="btn btn-warning mr-sm-2" onClick={() => this.filterData()}> שתף <i class="fa fa-share"></i> </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-light p-2">
                        <div className="d-flex flex-row align-items-start">
                          <img className="rounded-circle" src="image/33.jpeg" width="40"/>
                          <textarea className="form-control ml-1 shadow-none textarea"></textarea>
                        </div>
                        <div className="mt-2 text-right">
                          <button className="btn btn-success btn-sm shadow-none" type="button">פרסם תגובה</button>
                          <button className="btn btn-danger btn-sm ml-1 mr-3 shadow-none" type="button">ביטול</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
</div>
      )
   }
}
    export default Feed;

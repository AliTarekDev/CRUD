import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ToastService } from 'src/app/toast/toast.service';
import { Post } from '../../post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  totalPosts = 0;
  isLoading = false;
  postsPerPage = 2;
  currentPage = 1;
  postSizeOption = [1, 2, 5, 10];
  constructor(private _postService: PostService, private _toastService: ToastService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.isLoading = true;
    this._postService
      .getPosts(this.postsPerPage, this.currentPage)
      .subscribe((postData: { posts: Post[]; maxPosts: number }) => {
        this.posts = postData.posts;
        this.totalPosts = postData.maxPosts;
        this.isLoading = false;
      });
  }

  onDelete(postId: any) {
    this.isLoading = true;
    this._postService
      .deletePost(postId)
      .subscribe((postData: { message: string; post: Post }) => {
        console.log(postData.message);
        this.getPosts();
        this.isLoading = false;
      }, (error)=> {
        this.isLoading=false;
        this._toastService.addError("Not Authorized Person")
      });
  }

  onPageChange(e: any) {
    this.currentPage = e.pageIndex + 1;
    this.postsPerPage = e.pageSize;
    this.getPosts();
  }
}

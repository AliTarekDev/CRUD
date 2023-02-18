import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { ToastService } from '../toast/toast.service';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = 'https://crud-api-cnt6.vercel.app/post';
  constructor(
    private http: HttpClient,
    private _router: Router,
    private _toastService: ToastService
  ) {}

  getPosts(
    pageSize: number,
    page: number
  ): Observable<{ maxPosts: number; posts: Post[] }> {
    let params = new HttpParams().set('pagesize', pageSize).set('page', page);
    return this.http
      .get<{ message: string; posts: Post[]; maxPost: number }>(`${this.url}`, {
        params,
      })
      .pipe(
        map((postData) => {
          return {
            posts: postData.posts.map((post) => {
              return {
                ...post,
              };
            }),
            maxPosts: postData.maxPost,
          };
        }),
        tap(() => {
          this._toastService.addSuccess('get list of posts');
        }),
        catchError((error) => {
          this._toastService.addError(error.error.message);
          return throwError(error);
        })
      );
  }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.url}/${id}`).pipe(
      tap(() => {
        this._toastService.addSuccess('get post');
      })
    );
  }

  createPost(model: any): Observable<{ message: string; post: Post }> {
    return this.http
      .post<{ message: string; post: Post }>(`${this.url}`, model)
      .pipe(
        tap((postData) => {
          this._toastService.addSuccess(postData.message);
          this._router.navigate(['/']);
        })
      );
  }

  deletePost(id: string): Observable<{ message: string; post: Post }> {
    return this.http
      .delete<{ message: string; post: Post }>(`${this.url}/${id}`)
      .pipe(
        tap((postData) => {
          this._toastService.addSuccess(postData.message);
        })
      );
  }

  updatePost(
    model: any,
    id: string
  ): Observable<{ message: string; updtPost: Post }> {
    return this.http
      .put<{ message: string; updtPost: Post }>(`${this.url}/${id}`, model)
      .pipe(
        tap((postData) => {
          this._toastService.addSuccess(postData.message);
          this._router.navigate(['/']);
        })
      );
  }
}

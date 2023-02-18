import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from 'express';
import { ToastService } from 'src/app/toast/toast.service';
import { Post } from '../../post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  isLoading = false;
  imagePreview: any = '';
  postId: string | any = '';
  mode = 'create';
  post: Post = {
    title: '',
    content: '',
    image: '',
  };
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });
  constructor(
    private _postService: PostService,
    private _route: ActivatedRoute,
    private _toastService: ToastService
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('postId')) {
        this.postId = params.get('postId');
        this.mode = 'edit';
        this.isLoading = true;
        this._postService.getPost(this.postId).subscribe((post: Post) => {
          this.post = post;
          this.isLoading = false;

          this.form.setValue({
            title: this.post.title,
            content: this.post.content,
            image: this.post.image,
          });
          this.imagePreview = this.post.image;
          this.form.get('image')?.updateValueAndValidity();
        });
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }
  onSavePost() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode == 'create') {
      let formData = new FormData();
      formData.append('title', this.form.value.title || '');
      formData.append('content', this.form.value.content || '');
      formData.append('image', this.form.value.image || '');

      this._postService
        .createPost(formData)
        .subscribe((postData: { message: string; post: Post }) => {
          this.isLoading = false;
        }, (error)=> {
          this.isLoading= false;
          this._toastService.addError("cant create Post")
        });
    } else {
      let postData = new FormData();
      postData.append('title', this.form.value.title || '');
      postData.append('content', this.form.value.content || '');
      postData.append('image', this.form.value.image || '');

      this.isLoading = true;
      this._postService
        .updatePost(postData, this.postId)
        .subscribe((res: { message: string; updtPost: Post }) => {
          this.isLoading = false;
        },(error)=> {
          this.isLoading= false;
          this._toastService.addError("cant update Post")
        });
    }
  }

  onImagaPicked(e: any) {
    let file = e.target.files[0];
    this.form.patchValue({ image: file });
    this.form.get('image')?.updateValueAndValidity();

    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.imagePreview = fileReader.result;
    };

    fileReader.readAsDataURL(file);
  }
}

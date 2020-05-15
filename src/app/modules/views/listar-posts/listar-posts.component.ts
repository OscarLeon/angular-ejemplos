import { Component, OnInit } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { Posts } from "./../../../store/posts/posts.model";
import { RemovePost } from "./../../../store/posts/posts.actions";

@Component({
  selector: "app-listar-posts",
  templateUrl: "./listar-posts.component.html",
  styleUrls: ["./listar-posts.component.sass"],
})
export class ListarPostsComponent implements OnInit {
  public posts: Observable<any>;
  public postsArray: Array<any>;

  constructor(private store: Store) {
    this.posts = this.store.select((state) => state.posts.posts);
    this.posts.subscribe((response) => {
      this.postsArray = response;
      console.log("response: ", response);
    });
    console.log("this.posts: ", this.posts);
  }

  ngOnInit() {}

  public removePost(id) {
    this.store.dispatch(new RemovePost(id));
  }
}

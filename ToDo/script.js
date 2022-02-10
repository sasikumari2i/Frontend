$(document).ready(function () {
  const task_count_dom = document.querySelector("#tasks_count");
  const myday_count_dom = document.querySelector("#myday_count");
  const important_count_dom = document.querySelector("#important_count");
  const tasks_arr = [];
  const completed_arr = [];
  const left_menu_panel = $("#left_ul");
  const tasklists = $("#myday_tasks");
  const show_completed_task = $("#completed_tasks");
  const show_submit_btn = document.querySelector("#new-task-input");
  const add_list_input = $("#new_list");
  const right_container = $("#right_task_name");
  const step_task_input = $("#step_task_input");
  const task_details = $("#rightnav");
  let added_step_tasks = $("#step_task");
  const step_map = new Map();
  const myday_form = document.querySelector("#new-myday-task");

  const input = document.querySelector("#new-task-input");
  const completed_task_events = document.querySelector("#completed_tasks");
  //let task_click = document.querySelector("#myday_tasks");

  /*
   * Close Right Side Navigation
   */
  $("#right_close").click(function () {
    $("#rightnav").hide();
  });

  /*
   * Selecting the Task menu from Left side menu.
   */
  left_menu_panel.click(function (e) {
    let left_container = $(e.target);
    if (left_container.hasClass("clicking-class")) {
      tasklists.html("");
      show_completed_task.html("");
    }
    if (left_container.hasClass("clicking-class")) {
      let title = left_container.text();
      $("#title").text(title);
      for (let per of tasks_arr) {
        if (title === per.id) {
          tasklists.append(per.taskname);
        } else if (title == "Tasks") {
          tasklists.append(per.taskname);
        }
      }
      let display_comp_task = [];
      for (let comp_tasks of completed_arr) {
        if (title === comp_tasks.id) {
          display_comp_task.push(comp_tasks.taskname);
        }
      }
      if (display_comp_task.length > 0) {
        show_completed_task.html("<h2 id='completed_heading'>Completed</h2>");
        for (let completed_tasks of display_comp_task) {
          show_completed_task.append(completed_tasks);
        }
      } else {
        show_completed_task.html("");
      }
    }
    /*var result = tasks_arr.filter((obj) => {
      return obj.id === e.target.id;
    });*/
  });

  /*
   * Completed tasks
   */
  tasklists.click(function (e) {
    let task_completion = $(e.target);
    if (
      task_completion.hasClass("circle") &&
      !task_completion.closest("div").hasClass("strike")
    ) {
      let completed_task_name = task_completion.closest("div");
      completed_task_name.addClass("strike");
      completed_task_name.addClass("completed");
      let mat_icon = completed_task_name.children().first();
      let completed_title_id = $("#title").text();
      mat_icon.text("check_circle");
      mat_icon.css("color", "blue");
      let title = $("#title").text();
      let isAvailable = tasks_arr.findIndex(function (
        selected_task,
        task_index
      ) {
        if (selected_task.taskname.id === completed_task_name.attr("id")) {
          tasks_arr.splice(task_index, 1);
          return true;
        }
      });
      const completed_task = {
        id: completed_title_id,
        taskname: completed_task_name,
      };
      completed_arr.push(completed_task);
      const display_completed_tasks = $("#completed_tasks");
      if (completed_title_id === completed_task.id) {
        if (completed_arr.length === 1) {
          display_completed_tasks.html(
              "<h2 id='completed_heading'>Completed</h2>"
          );
        }
        display_completed_tasks.append(completed_task_name);
      }
    }
    let completed_title_id = $("#title").text();
    let count = tasks_arr.filter((obj) => {
      return ((obj.id === completed_title_id) && !(obj.taskname.hasClass('completed')));
    });

    var listItems = $("#left_ul li");
    listItems.each(function(idx, li) {
      var product = $(li);
      if(product.children('div').attr('id') === completed_title_id) {
        product.children('div').next().text(count.length);
      }
    });
  });

  /*
   * Reinserting Tasks from Completed Task
   */
  show_completed_task.click(function (e) {
    let comp_title = $("#title").text();
    let reinsert_title_id = "";
    let current_target = $(e.target);
    if (
      current_target.hasClass("circle") &&
      current_target.closest("div").hasClass("strike")
    ) {
      let reinsert_task_name = current_target.closest("div");
      let current_title = $("#title").text();
      for (let comp of completed_arr) {
        if (
          comp.id === current_title &&
          reinsert_task_name.attr("id") === comp.taskname.attr("id")
        ) {
          reinsert_title_id = comp_title;
          break;
        }
      }
      if (reinsert_title_id != "") {
        reinsert_task_name.removeClass("strike");
        reinsert_task_name.removeClass("completed");
        reinsert_task_name.children().first().text("radio_button_unchecked");
        reinsert_task_name.children().first().css("color", "black");

        let isAvailable = completed_arr.findIndex(function (
          reinserted_task,
          i
        ) {
          if (
            reinserted_task.taskname.attr("id") ===
            reinsert_task_name.attr("id")
          ) {
            completed_arr.splice(i, 1);
            return true;
          }
        });
        const reinsert_task = {
          id: reinsert_title_id,
          taskname: reinsert_task_name,
        };
        tasks_arr.push(reinsert_task);
        const display_reinserted_tasks = $("#myday_tasks");
        if (reinsert_title_id === reinsert_task.id) {
          display_reinserted_tasks.append(reinsert_task_name);
          tasklists.append(reinsert_task_name);
        } else if (title == "Tasks") {
          tasklists.append(reinsert_task_name);
        }
      }
      if (completed_arr.length <= 0) {
        show_completed_task.html("");
        reinsert_title_id = "";
      }
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.id == "new-task-input") {
      document
        .querySelector("#submit_task_show")
        .classList.add("submit-task-display");
    } else {
      document
        .querySelector("#submit_task_show")
        .classList.remove("submit-task-display");
    }
  });

  /*
   * Adding Tasks
   */
  $("form").submit(function (e) {
    e.preventDefault();
    let title_id = $("#title").text();
    let todo_task = input.value;
    if (input.value) {
      let task_elem = $("<div></div>");
      task_elem.html(
        "<i class='material-icons circle'>radio_button_unchecked</i>"
      );
      task_elem.append(todo_task);
      task_elem.append(
        "<i class='material-icons-outlined important-icon'>star_outlined</i>"
      );
      task_elem.append("<hr>");
      task_elem.addClass("tasks");
      task_elem.addClass("tasks-hover");
      task_elem.attr("id", todo_task);
      step_map.set(todo_task, []);
      const task = {
        id: title_id,
        taskname: task_elem,
      };
      tasks_arr.push(task);
      input.value = "";
      let display_tasklists = $("#myday_tasks");
      for (let per of tasks_arr) {
        if (title_id === per.id) {
          display_tasklists.append(per.taskname);
        }
      }
    }
    let completed_title_id = $("#title").text();
    let count = tasks_arr.filter((obj) => {
      return ((obj.id === completed_title_id) && !(obj.taskname.hasClass('completed')));
    });

    var listItems = $("#left_ul li");
    listItems.each(function(idx, li) {
      var product = $(li);
      if(product.children('div').attr('id') === completed_title_id) {
        product.children('div').next().text(count.length);
      }
    });
  });

  /*
   * Open Left Side Navigation
   */
  $("#nav-btn").click(function () {
    $("#mySidenav").css("width", "265px");
    $("#main").css("margin-left", "265px");
    $("#nav-btn").hide();
  });

  /*
   * Close Left Side Navigation
   */
  $("#close_left").click(function () {
    $("#mySidenav").css("width", "0");
    $("#main").css("margin-left", "0");
    $("#nav-btn").show();
  });

  /*
   * Adding Title to Right Side details bar
   */
  tasklists.click(function (e) {
    let task_id = $(e.target);
    if (task_id.hasClass("tasks")) {
      task_details.addClass("submit-task-display");
      task_details.show();
      right_container.text(task_id.attr("id"));
      added_step_tasks.html("");
      var st = step_map.get(right_container.text());
      for (let i = 0; i < st.length; i++) {
        let step_list = $("<li></li>");
        step_list.text(st[i]);
        added_step_tasks.append(step_list);
        step_task_input.value = "";
      }
    }
  });

  /*
   * Adding sub tasks to tasks
   */

  step_task_input.keyup(function (e) {
    if (e.keyCode == 13) {
      let sub_task = step_task_input.val();
      step_map.get(right_container.text()).push(sub_task);
      let display_step_tasks = step_map.get(right_container.text());
      step_task_input.val("");
      let step_list_append = $("<li></li>");
      step_list_append.html(
        "<i class='material-icons circle'>radio_button_unchecked</i>"
      );
      step_list_append.append(sub_task);
      added_step_tasks.append(step_list_append);
      step_task_input.val("");
    }
  });

  /*
   * Adding new Lists to left side panel
   */
  add_list_input.keyup(function (e) {
    if (e.keyCode == 13) {
      let left_list = add_list_input.val();
      let new_ul = $("#left_ul");
      let new_li = $('<li></li>');
      let new_mat_icon = $('<i></i>');
      new_mat_icon.addClass("material-icons-outlined");
      new_mat_icon.html("list");
      const new_list_class = $("<div></div>");
      new_list_class.attr("id",left_list);
      new_list_class.addClass("clicking-class");
      new_list_class.text(left_list);  
      let span_elem = $("<span></span>");
      span_elem.addClass("count");
      new_li.append(new_mat_icon);
      new_li.append(new_list_class);
      new_li.append(span_elem);
      new_ul.append(new_li);
      add_list_input.val("");
    }
  });
});

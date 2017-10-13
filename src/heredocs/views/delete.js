const heredoc = require('heredoc');

module.exports.template = heredoc.strip(() => { /*
  @model App.Models.${MODEL}
  @{
      ViewData["Title"] = "Delete";
  }
  <h2>Delete</h2>
  <h3>Are you sure you want to delete this?</h3>
  <div>
      <h4>${MODEL}</h4>
      <hr />
      <dl class="dl-horizontal">
          <dt>
              @Html.DisplayNameFor(model => model.Genre)
          </dt>
          <dd>
              @Html.DisplayFor(model => model.Genre)
          </dd>
          <dt>
              @Html.DisplayNameFor(model => model.Title)
          </dt>
          <dd>
              @Html.DisplayFor(model => model.Title)
          </dd>
      </dl>
      
      <form asp-action="Delete">
          <div class="form-actions no-color">
              <input type="submit" value="Delete" class="btn btn-default" /> |
              <a asp-action="Index">Back to List</a>
          </div>
      </form>
  </div>
*/ });

module.exports.name = "Delete.cshtml";

const heredoc = require('heredoc');

module.exports.template = heredoc.strip(() => { /*
  @model App.Models.${MODEL}
  @{
      ViewData["Title"] = "Edit";
  }
  <h2>Edit</h2>
  <form asp-action="Edit">
      <div class="form-horizontal">
          <h4>${MODEL}</h4>
          <hr />
          <div asp-validation-summary="ModelOnly" class="text-danger"></div>
          <input type="hidden" asp-for="ID" />
          <div class="form-group">
              <label asp-for="Genre" class="col-md-2 control-label"></label>
              <div class="col-md-10">
                  <input asp-for="Genre" class="form-control" />
                  <span asp-validation-for="Genre" class="text-danger" />
              </div>
          </div>
          <div class="form-group">
              <label asp-for="Title" class="col-md-2 control-label"></label>
              <div class="col-md-10">
                  <input asp-for="Title" class="form-control" />
                  <span asp-validation-for="Title" class="text-danger" />
              </div>
          </div>
          <div class="form-group">
              <div class="col-md-offset-2 col-md-10">
                  <input type="submit" value="Save" class="btn btn-default" />
              </div>
          </div>
      </div>
  </form>
  <div>
      <a asp-action="Index">Back to List</a>
  </div>
  @section Scripts {
      @{await Html.RenderPartialAsync("_ValidationScriptsPartial");}
  }
*/ });

module.exports.name = "Edit.cshtml";

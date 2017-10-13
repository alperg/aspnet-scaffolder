const heredoc = require('heredoc');

module.exports.template = heredoc.strip(() => { /*
  @model App.Models.${MODEL}
  @{
      ViewData["Title"] = "Create";
  }
  <h2>Create</h2>
  <form asp-action="Create">
      <div class="form-horizontal">
          <h4>${MODEL}</h4>
          <hr />
          <div asp-validation-summary="ModelOnly" class="text-danger"></div>
          <!-- Add your model's attributes here. Create one form-group per attribute. -->
          <div class="form-group">
              <label asp-for="ATTRIBUTE" class="col-md-2 control-label"></label>
              <div class="col-md-10">
                  <input asp-for="ATTRIBUTE" class="form-control" />
                  <span asp-validation-for="ATTRIBUTE" class="text-danger" />
              </div>
          </div>
          <div class="form-group">
              <div class="col-md-offset-2 col-md-10">
                  <input type="submit" value="Create" class="btn btn-default" />
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

module.exports.name = "Create.cshtml";

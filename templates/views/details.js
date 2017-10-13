const heredoc = require('heredoc');

module.exports.template = heredoc.strip(() => { /*
  @model App.Models.${MODEL}
  @{
      ViewData["Title"] = "Details";
  }
  <h2>Details</h2>
  <div>
      <h4>${MODEL}</h4>
      <hr />
      <dl class="dl-horizontal">
          <!-- Add your model's attributes here. -->
          <dt>
              @Html.DisplayNameFor(model => model.ATTRIBUTE)
          </dt>
          <dd>
              @Html.DisplayFor(model => model.ATTRIBUTE)
          </dd>
      </dl>
  </div>
  <div>
      <a asp-action="Edit" asp-route-id="@Model.ID">Edit</a> |
      <a asp-action="Index">Back to List</a>
  </div>
*/ });

module.exports.name = "Details.cshtml";

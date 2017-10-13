const heredoc = require('heredoc');

module.exports.template = heredoc.strip(() => { /*
  @model IEnumerable<App.Models.${MODEL}>
  @{
      ViewData["Title"] = "Index";
  }
  <h2>Index</h2>
  <p>
      <a asp-action="Create">Create New</a>
  </p>
  <table class="table">
      <thead>
          <tr>
              <!-- Add your model's attributes here. -->
              <th>
                  @Html.DisplayNameFor(model => model.ATTRIBUTE)
              </th>
              <th></th>
          </tr>
      </thead>
      <tbody>
  @foreach (var item in Model) {
          <!-- Add your model's attributes here. -->
          <tr>
              <td>
                  @Html.DisplayFor(modelItem => item.ATTRIBUTE)
              </td>
              <td>
                  <a asp-action="Edit" asp-route-id="@item.ID">Edit</a> |
                  <a asp-action="Details" asp-route-id="@item.ID">Details</a> |
                  <a asp-action="Delete" asp-route-id="@item.ID">Delete</a>
              </td>
          </tr>
  }
      </tbody>
  </table>
*/ });

module.exports.name = "Index.cshtml";

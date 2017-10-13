const heredoc = require('heredoc');

module.exports.controller = heredoc.strip(() => { /*
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using System.Threading.Tasks;
  using Microsoft.AspNetCore.Mvc;
  using Microsoft.AspNetCore.Mvc.Rendering;
  using Microsoft.EntityFrameworkCore;
  using App.Data;
  using App.Models;

  namespace App.Controllers
  {
      public class ${MODEL}Controller : Controller
      {
          private readonly ApplicationDbContext _context;

          public ${MODEL}Controller(ApplicationDbContext context)
          {
              _context = context;    
          }

          // GET: ${MODEL}
          public async Task<IActionResult> Index()
          {
              return View(await _context.${MODEL}.ToListAsync());
          }

          // GET: ${MODEL}/Details/5
          public async Task<IActionResult> Details(int? id)
          {
              if (id == null)
              {
                  return NotFound();
              }
              var ${model} = await _context.${MODEL}.SingleOrDefaultAsync(m => m.ID == id);
              if (${model} == null)
              {
                  return NotFound();
              }
              return View(${model});
          }

          // GET: ${MODEL}/Create
          public IActionResult Create()
          {
              return View();
          }

          // POST: ${MODEL}/Create
          // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
          // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
          [HttpPost]
          [ValidateAntiForgeryToken]
          public async Task<IActionResult> Create([Bind("ID,Genre,Title")] ${MODEL} ${model})
          {
              if (ModelState.IsValid)
              {
                  _context.Add(${model});
                  await _context.SaveChangesAsync();
                  return RedirectToAction("Index");
              }
              return View(${model});
          }

          // GET: ${MODEL}/Edit/5
          public async Task<IActionResult> Edit(int? id)
          {
              if (id == null)
              {
                  return NotFound();
              }
              var ${model} = await _context.${MODEL}.SingleOrDefaultAsync(m => m.ID == id);
              if (${model} == null)
              {
                  return NotFound();
              }
              return View(${model});
          }

          // POST: ${MODEL}/Edit/5
          // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
          // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
          [HttpPost]
          [ValidateAntiForgeryToken]
          public async Task<IActionResult> Edit(int id, [Bind("ID,Genre,Title")] ${MODEL} ${model})
          {
              if (id != ${model}.ID)
              {
                  return NotFound();
              }
              if (ModelState.IsValid)
              {
                  try
                  {
                      _context.Update(${model});
                      await _context.SaveChangesAsync();
                  }
                  catch (DbUpdateConcurrencyException)
                  {
                      if (!${MODEL}Exists(${model}.ID))
                      {
                          return NotFound();
                      }
                      else
                      {
                          throw;
                      }
                  }
                  return RedirectToAction("Index");
              }
              return View(${model});
          }

          // GET: ${MODEL}/Delete/5
          public async Task<IActionResult> Delete(int? id)
          {
              if (id == null)
              {
                  return NotFound();
              }
              var ${model} = await _context.${MODEL}.SingleOrDefaultAsync(m => m.ID == id);
              if (${model} == null)
              {
                  return NotFound();
              }
              return View(${model});
          }
          
          // POST: ${MODEL}/Delete/5
          [HttpPost, ActionName("Delete")]
          [ValidateAntiForgeryToken]
          public async Task<IActionResult> DeleteConfirmed(int id)
          {
              var ${model} = await _context.${MODEL}.SingleOrDefaultAsync(m => m.ID == id);
              _context.${MODEL}.Remove(${model});
              await _context.SaveChangesAsync();
              return RedirectToAction("Index");
          }
          private bool ${MODEL}Exists(int id)
          {
              return _context.${MODEL}.Any(e => e.ID == id);
          }
      }
  }
*/ });
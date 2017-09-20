require 'test_helper'

class NoteShortcutsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get note_shortcuts_new_url
    assert_response :success
  end

  test "should get create" do
    get note_shortcuts_create_url
    assert_response :success
  end

  test "should get edit" do
    get note_shortcuts_edit_url
    assert_response :success
  end

  test "should get update" do
    get note_shortcuts_update_url
    assert_response :success
  end

  test "should get index" do
    get note_shortcuts_index_url
    assert_response :success
  end

  test "should get show" do
    get note_shortcuts_show_url
    assert_response :success
  end

  test "should get destroy" do
    get note_shortcuts_destroy_url
    assert_response :success
  end

end
